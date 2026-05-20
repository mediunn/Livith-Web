import { useQuery } from "@tanstack/react-query";
import getAlarmSetting from "../api/getAlarmSetting";

export const useAlarmSetting = () => {
  return useQuery({
    queryKey: ["alarmSetting"],
    queryFn: getAlarmSetting,
  });
};
