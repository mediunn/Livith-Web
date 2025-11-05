import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/getSearchResult";
import { ConcertStatus, StatusFilter } from "../../../entities/concert/types";

type UseSearchResultParams = {
  keyword: string;
  size?: number;
};

type Cursor = { id: number | null; value: string | null };

export const useSearchResult = ({ keyword, size }: UseSearchResultParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", keyword],
    queryFn: ({ pageParam }) =>
      getSearchResult({
        keyword,
        cursor: pageParam
          ? JSON.stringify({ value: pageParam.value, id: pageParam.id })
          : undefined,
        size,
        status: [
          StatusFilter.ONGOING,
          StatusFilter.COMPLETED,
          StatusFilter.UPCOMING,
        ],
      }),
    initialPageParam: undefined as Cursor | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursor;
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data.data),
        totalCount: data.pages[0].data.totalCount,
        pageParams: data.pageParams,
      };
    },
  });
};
