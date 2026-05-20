import { useInfiniteQuery } from "@tanstack/react-query";
import { getConcertList } from "../api/getConcertList";

type UseConcertListParams = {
  size: number;
};

type ConcertListPageParam = {
  cursor?: number;
};

export const useConcertList = ({ size }: UseConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts"],
    queryFn: ({ pageParam }) =>
      getConcertList({
        cursor: pageParam.cursor ?? undefined,
        size,
      }),
    initialPageParam: {
      cursor: undefined,
    } as ConcertListPageParam,
    getNextPageParam: (lastPage) => {
      const cursor = lastPage.data.cursor;
      return cursor == null ? undefined : { cursor };
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data.data),
        pageParams: data.pageParams,
      };
    },
  });
};
