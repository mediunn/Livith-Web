import { useQuery } from "@tanstack/react-query";
import { getSetlistSongList } from "../api/getSetlistSongList";

function useSetlistSongList({ setlistId }: { setlistId: number }) {
  return useQuery({
    queryKey: ["setlistSongList", setlistId],
    queryFn: () => getSetlistSongList({ setlistId }),
    select: (data) => data.data,
  });
}

export default useSetlistSongList;
