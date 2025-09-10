import { useQuery } from "@tanstack/react-query";
import { getSchedule, Schedule } from "../api/getSchedule";

export function useSchedule(concertId: number | null) {
  return useQuery<Schedule[]>({
    queryKey: ["Schedule", concertId],
    queryFn: () => getSchedule(concertId!),
    enabled: !!concertId,
  });
}
