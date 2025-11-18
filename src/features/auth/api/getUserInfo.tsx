import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";
import { User } from "../../../entities/user/types";

export async function getUserInfo(): Promise<ApiResponse<User>> {
  const response = await axiosInstance.get("/api/v4/users/me");
  return response.data;
}
