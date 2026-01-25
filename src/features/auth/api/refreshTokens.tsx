import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type RefreshTokensResponse = {
  accessToken: string;
};

export async function refreshTokens(): Promise<
  ApiResponse<RefreshTokensResponse>
> {
  const response = await axiosInstance.post(`/auth/refresh?client=web`, {
    skipAuthRefresh: true,
  });
  return response.data;
}
