import { useQuery } from "@tanstack/react-query";
import { getSetlistDetail } from "../api/getSetlistDetail";
import { SetlistDetailProps } from "../../../entities/setlist/types";

function useSetlistDetail({ setlistId, concertId }: SetlistDetailProps) {
  return useQuery({
    queryKey: ["setlist", concertId, setlistId],
    queryFn: () => getSetlistDetail({ concertId, setlistId }),
    select: (data) => data.data,
  });
}

export default useSetlistDetail;
