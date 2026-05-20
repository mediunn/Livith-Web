import { useQuery } from "@tanstack/react-query";
import { getMd, Md } from "../api/getMd";

export function useMd(concertId: number | null) {
  return useQuery<Md[]>({
    queryKey: ["mds", concertId],
    queryFn: () => getMd(concertId!),
    enabled: !!concertId,
  });
}
