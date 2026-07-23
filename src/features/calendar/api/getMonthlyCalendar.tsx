import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";
import {
  ConcertType,
  MonthlyCalendarResponse,
  ScheduleType,
} from "../model/types";

export async function getMonthlyCalendar({
  year,
  month,
  scheduleTypes,
  concertType,
}: {
  year: number;
  month: number;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}): Promise<MonthlyCalendarResponse> {
  const response = await axiosInstance.get<
    ApiResponse<MonthlyCalendarResponse>
  >("/calendar", {
    params: {
      year,
      month,
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
  });
  return response.data.data;
}
