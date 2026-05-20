import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type CheckNickname = {
  available: boolean;
};
export async function checkNickname(
  nickname: string
): Promise<ApiResponse<CheckNickname>> {
  const response = await axiosInstance.get<ApiResponse<CheckNickname>>(
    `/users/check-nickname?nickname=${nickname}`
  );
  return response.data;
}
