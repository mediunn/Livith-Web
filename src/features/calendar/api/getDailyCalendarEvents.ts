import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";
import {
  ConcertType,
  DailyCalendarResponse,
  ScheduleType,
} from "../model/types";

export async function getDailyCalendarEvents({
  date,
  scheduleTypes,
  concertType,
}: {
  date: string;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}): Promise<DailyCalendarResponse> {
  const response = await axiosInstance.get<ApiResponse<DailyCalendarResponse>>(
    "/calendar/events",
    {
      params: {
        date,
        scheduleTypes,
        concertType,
      },
      paramsSerializer: (params) => {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
          if (value == null) return;

          if (Array.isArray(value)) {
            value.forEach((v) => searchParams.append(key, String(v)));
          } else {
            searchParams.append(key, String(value));
          }
        });

        return searchParams.toString();
      },
    },
  );

  return response.data.data;
}
