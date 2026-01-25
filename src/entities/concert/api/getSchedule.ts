import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Schedule = {
  id: number;
  category: string;
  scheduledAt: string;
  type: string;
};

export async function getSchedule(id: number): Promise<Schedule[]> {
  const response = await axiosInstance.get<ApiResponse<Schedule[]>>(
    `/concerts/${id}/schedule`
  );
  return response.data.data;
}
