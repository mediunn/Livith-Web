import { useInfiniteQuery } from "@tanstack/react-query";
import { getConcertList } from "../api/getConcertList";

type UseConcertListParams = {
  size: number;
};

type Cursor = { id: number | null; startDate: string | null };

export const useConcertList = ({ size }: UseConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts"],
    queryFn: ({ pageParam }) =>
      getConcertList({
        id: pageParam?.id,
        cursor: pageParam
          ? JSON.stringify({ startDate: pageParam.startDate, id: pageParam.id })
          : undefined,
        size,
      }),
    initialPageParam: undefined as Cursor | undefined,
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
