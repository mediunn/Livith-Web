import { useInfiniteQuery } from "@tanstack/react-query";
import { ConcertFilter } from "../../../entities/concert/types";
import { getConcertList } from "../api/getConcertList";

type UseConcertListParams = {
  filter: ConcertFilter;
  size: number;
};

export const useConcertList = ({ filter, size }: UseConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", filter],
    queryFn: ({ pageParam }) =>
      getConcertList({ filter, cursor: pageParam, size }),
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
};
