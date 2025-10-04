import { useQuery } from "@tanstack/react-query";
import { getFanchant, Fanchant } from "../api/getFanchant";

export function useFanchant(setlistId: number | null, songId: number | null) {
  return useQuery<Fanchant>({
    queryKey: ["fanchant", setlistId, songId],
    queryFn: () => getFanchant(setlistId!, songId!),
    enabled: !!setlistId && !!songId,
  });
}
