import { useInfiniteQuery } from "@tanstack/react-query";
import { getSetlistCollection } from "../api/getSetlistCollection";
import { SetlistType } from "../../../entities/setlist/types";

interface SetlistCollectionProps {
  concertId: number;
  size?: number;
  type: SetlistType;
}
function useSetlistCollection({
  concertId,
  size,
  type,
}: SetlistCollectionProps) {
  return useInfiniteQuery({
    queryKey: ["setlist", type],
    queryFn: ({ pageParam }) =>
      getSetlistCollection({ type, concertId, cursor: pageParam, size }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursor;
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data.data),
        pageParams: data.pageParams,
      };
    },
  });
}

export default useSetlistCollection;
