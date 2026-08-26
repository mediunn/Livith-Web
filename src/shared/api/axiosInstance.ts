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

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.skipAuthRefresh
    ) {
      if (isRefreshing) {
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

        // refresh 종료 상태 먼저 변경
        isRefreshing = false;

        // 대기 요청 재실행
        onRefreshed(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;

        localStorage.removeItem("accessToken");

        // 추가
        window.dispatchEvent(new Event("auth:expired"));

        // 대기 중 요청 실패 처리
        onRefreshFailed(refreshError);

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
