import { useInfiniteQuery } from "@tanstack/react-query";
import { ConcertStatus } from "../../../entities/concert/types";
import { getConcertList } from "../api/getConcertList";

type UseConcertListParams = {
  status: ConcertStatus;
  size: number;
};

export const useConcertList = ({ status, size }: UseConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", status],
    queryFn: ({ pageParam }) =>
      getConcertList({ status, cursor: pageParam, size }),
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
