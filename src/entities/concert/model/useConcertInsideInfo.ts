import { useQuery } from "@tanstack/react-query";
import { getConcertInsideInfo } from "../api/getConcertInsideInfo";

export function useConcertInsideInfo(id: number | null) {
  return useQuery({
    queryKey: ["concertInsideInfo", id],
    queryFn: () => getConcertInsideInfo(id!),
    enabled: !!id,
  });
}
