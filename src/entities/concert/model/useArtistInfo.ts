import { useQuery } from "@tanstack/react-query";
import { getArtistInfo, Artist } from "../api/getArtistInfo";

export function useArtistInfo(concertId: number | null) {
  return useQuery<Artist>({
    queryKey: ["artistInfo", concertId],
    queryFn: () => getArtistInfo(concertId!),
    enabled: !!concertId,
  });
}
