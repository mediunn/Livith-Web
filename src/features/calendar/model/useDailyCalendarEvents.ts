import { useQuery } from "@tanstack/react-query";
import { getDailyCalendarEvents } from "../api/getDailyCalendarEvents";
import { ConcertType, ScheduleType } from "./types";

export function useDailyCalendarEvents({
  date,
  scheduleTypes,
  concertType,
}: {
  date?: string;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  return useQuery({
    queryKey: ["dailyCalendarEvents", date, scheduleTypes, concertType],
    queryFn: () =>
      getDailyCalendarEvents({
        date: date!,
        scheduleTypes,
        concertType,
      }),
    enabled: !!date,
  });
}
