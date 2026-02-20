import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type WithdrawResponse = {
  message: string;
};

export async function withdraw(
  reason: string
): Promise<ApiResponse<WithdrawResponse>> {
  const response = await axiosInstance.post(`/auth/withdraw`, {
    reason,
  });
  return response.data;
}
