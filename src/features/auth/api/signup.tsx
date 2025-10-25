import { SignupRequest, User } from "../../../entities/user/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type SignupResponse = {
  user: User;
  accessToken: string;
};
export async function signup({
  userData,
  client,
}: SignupRequest): Promise<ApiResponse<SignupResponse>> {
  const response = await axiosInstance.post(
    `/api/v4/auth/signup?client=${client}`,
    userData
  );
  return response.data;
}
