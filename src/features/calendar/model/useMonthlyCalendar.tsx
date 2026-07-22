import { useQuery } from "@tanstack/react-query";
import { getMonthlyCalendar } from "../api/getMonthlyCalendar";
import { ConcertType, ScheduleType } from "./types";

export function useMonthlyCalendar({
  year,
  month,
  scheduleTypes,
  concertType,
}: {
  year: number;
  month: number;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  return useQuery({
    queryKey: ["monthlyCalendar", year, month, scheduleTypes, concertType],
    queryFn: () =>
      getMonthlyCalendar({ year, month, scheduleTypes, concertType }),
  });
}
