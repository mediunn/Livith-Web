import { useQuery } from "@tanstack/react-query";
import { getSetlistInfo, Setlist } from "../api/getSetlistInfo";

export function useSetlist(concertId: number | null) {
  return useQuery<Setlist[]>({
    queryKey: ["setlist", concertId],
    queryFn: () => getSetlistInfo(concertId!),
    enabled: !!concertId,
  });
}
