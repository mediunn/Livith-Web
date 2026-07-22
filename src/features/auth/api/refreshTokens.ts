import { ApiResponse } from "../../../shared/types/response";
import { API_BASE_URL } from "../../../shared/api/constants";
import axios from "axios";

type RefreshTokensResponse = {
  accessToken: string;
};

const refreshAxios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function refreshTokens(): Promise<
  ApiResponse<RefreshTokensResponse>
> {
  const response = await refreshAxios.post<ApiResponse<RefreshTokensResponse>>(
    `/auth/refresh?client=web`,
  );
  return response.data;
}
