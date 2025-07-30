import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Schedule = {
  id: number;
  category: string;
  scheduledAt: string;
};

export async function getSchedule(id: number): Promise<Schedule[]> {
  const response = await axiosInstance.get<ApiResponse<Schedule[]>>(
    `/api/v2/concerts/${id}/schedule`
  );
  return response.data.data;
}
