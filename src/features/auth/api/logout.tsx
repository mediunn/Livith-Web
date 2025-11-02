import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type LogoutResponse = {
  message: string;
};

export async function logout(): Promise<ApiResponse<LogoutResponse>> {
  const response = await axiosInstance.post("/api/v4/auth/logout?client=web");
  return response.data;
}
