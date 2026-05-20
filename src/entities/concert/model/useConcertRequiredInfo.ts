import { useQuery } from "@tanstack/react-query";
import {
  getConcertRequiredInfo,
  ConcertRequired,
} from "../api/getConcertRequiredInfo";

export function useConcertRequiredInfo(concertId: number | null) {
  return useQuery<ConcertRequired[]>({
    queryKey: ["concertRequiredInfo", concertId],
    queryFn: () => getConcertRequiredInfo(concertId!),
    enabled: !!concertId,
  });
}
