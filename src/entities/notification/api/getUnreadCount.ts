import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export const getUnreadCount = async (): Promise<number> => {
  const response = await axiosInstance.get<
    ApiResponse<{ unreadCount: number }>
  >("/notifications/unread-count");
  return response.data.data.unreadCount;
};
