import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/getSearchResult";
import { StatusFilter } from "../../../entities/concert/types";

type UseSearchResultParams = {
  keyword: string;
  size?: number;
  status?: StatusFilter[];
};

type Cursor = number;

export const useSearchResult = ({
  keyword,
  size,
  status,
}: UseSearchResultParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", keyword],
    queryFn: ({ pageParam }) =>
      getSearchResult({
        keyword,
        cursor: pageParam ?? undefined,
        size,
        status,
      }),
    initialPageParam: undefined as Cursor | undefined,
    getNextPageParam: (lastPage) => {
      return lastPage.data.cursor ?? undefined;
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
