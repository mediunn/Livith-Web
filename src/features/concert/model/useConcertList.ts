import { useInfiniteQuery } from "@tanstack/react-query";
import { getConcertList } from "../api/getConcertList";

type UseConcertListParams = {
  size: number;
};
export const useConcertList = ({ size }: UseConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts"],
    queryFn: ({ pageParam }) =>
      getConcertList({
        id: pageParam?.id,
        cursor: pageParam?.startDate,
        size,
      }),
    initialPageParam: { id: null, startDate: null },
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursor ?? undefined;
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data.data),
        pageParams: data.pageParams,
      };
    },
  });
};
