import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type LogoutResponse = {
  message: string;
};

export async function logout(): Promise<ApiResponse<LogoutResponse>> {
  const response = await axiosInstance.post(
    "/auth/logout?client=web",
    {},
    { skipAuthRefresh: true } as any
  );

  return response.data;
}
