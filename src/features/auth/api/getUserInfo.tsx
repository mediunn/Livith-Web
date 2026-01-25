import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";
import { User } from "../../../entities/user/types";

export async function getUserInfo(): Promise<ApiResponse<User>> {
  const response = await axiosInstance.get("/users/me");
  return response.data;
}
