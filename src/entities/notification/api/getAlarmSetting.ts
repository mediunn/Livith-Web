import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";
import { AlarmSetting } from "../types";

async function getAlarmSetting(): Promise<AlarmSetting> {
  const response = await axiosInstance.get<ApiResponse<AlarmSetting>>(
    "/notifications/settings",
  );

  return response.data.data;
}
export default getAlarmSetting;
