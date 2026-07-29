import { useQuery } from "@tanstack/react-query";
import { getMonthlyCalendar } from "../api/getMonthlyCalendar";
import { ConcertType, ScheduleType } from "./types";

export function useMonthlyCalendar({
  startDate,
  endDate,
  scheduleTypes,
  concertType,
}: {
  startDate: string;
  endDate: string;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  return useQuery({
    queryKey: [
      "monthlyCalendar",
      startDate,
      endDate,
      scheduleTypes,
      concertType,
    ],
    queryFn: () =>
      getMonthlyCalendar({ startDate, endDate, scheduleTypes, concertType }),
  });
}
