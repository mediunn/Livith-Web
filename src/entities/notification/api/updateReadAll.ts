import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

interface UpdateReadAllResponse {
  success: boolean;
  message: string;
  updatedCount: number;
}

export const updateReadAll = async () => {
  const response = await axiosInstance.patch<
    ApiResponse<UpdateReadAllResponse>
  >(`/notifications/read-all`);
  return response.data;
};
