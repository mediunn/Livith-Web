import { useQuery } from "@tanstack/react-query";
import { getSong, Song } from "../api/getSong";

export function useSong(songId: number | null) {
  return useQuery<Song>({
    queryKey: ["song", songId],
    queryFn: () => getSong(songId!),
    enabled: !!songId,
  });
}
