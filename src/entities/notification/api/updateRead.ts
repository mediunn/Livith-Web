import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export const updateRead = async (id: number) => {
  const response = await axiosInstance.patch<ApiResponse<{ id: number }>>(
    `/notifications/${id}/read`,
  );
  return response.data;
};
