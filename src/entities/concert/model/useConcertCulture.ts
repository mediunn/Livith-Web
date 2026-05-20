import { useQuery } from "@tanstack/react-query";
import { getConcertCulture, ConcertCulture } from "../api/getConcertCulture";

export function useConcertCulture(concertId: number | null) {
  return useQuery<ConcertCulture[]>({
    queryKey: ["concertCulture", concertId],
    queryFn: () => getConcertCulture(concertId!),
    enabled: !!concertId,
  });
}
