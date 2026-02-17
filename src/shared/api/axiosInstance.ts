import axios from "axios";
import { refreshTokens } from "../../features/auth/api/refreshTokens";
import { API_BASE_URL } from "./constants";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];
let refreshRejecters: ((error: unknown) => void)[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
  refreshRejecters = [];
};

const onRefreshFailed = (error: unknown) => {
  refreshRejecters.forEach((reject) => reject(error));
  refreshSubscribers = [];
  refreshRejecters = [];
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // accessToken 만료 && 아직 retry 안 한 경우
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.skipAuthRefresh
    ) {
      if (isRefreshing) {
        // 다른 요청이 이미 refresh 중이라면 기다리기
        return new Promise((resolve, reject) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          });
          refreshRejecters.push(reject);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await refreshTokens();
        const newAccessToken = res.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        onRefreshed(newAccessToken);
        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        localStorage.removeItem("accessToken");
        onRefreshFailed(refreshError); // 대기 중인 요청 모두 reject
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
