import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/getSearchResult";

type UseSearchResultParams = {
  keyword: string;
  size?: number;
};

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
      }),
    initialPageParam: { id: null, value: null },
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
