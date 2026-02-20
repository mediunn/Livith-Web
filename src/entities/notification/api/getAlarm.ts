import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export interface Alarm {
  id: number;
  type: string;
  title: string;
  content: string;
  targetId?: string;
  isRead: boolean;
  createdAt: string;
}

type GetAlarmParams = {
  cursor?: number;
  size?: number;
};

type AlarmResponse = {
  data: Alarm[];
};

export const getAlarm = async (
  params: GetAlarmParams = { size: 20 },
): Promise<AlarmResponse> => {
  const { cursor, size = 20 } = params;

  try {
    const requestParams: { size: number; cursor?: number } = { size };

    if (cursor !== undefined && cursor !== null) {
      requestParams.cursor = cursor;
    }

    const response = await axiosInstance.get<ApiResponse<Alarm[]>>(
      "/notifications",
      { params: requestParams },
    );

    const result = {
      data: Array.isArray(response.data.data) ? response.data.data : [],
    };

    return result;
  } catch (error: any) {
    throw error;
  }
};
