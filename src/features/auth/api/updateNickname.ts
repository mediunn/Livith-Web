import { User } from "../../../entities/user/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function updateNickname(
  nickname: string
): Promise<ApiResponse<User>> {
  const response = await axiosInstance.patch(`/users/nickname`, {
    nickname,
  });
  return response.data;
}
