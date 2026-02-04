import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearchResult } from "../api/getSearchResult";
import { SortFilter } from "../../../entities/concert/types";
import { StatusFilter } from "../../../entities/concert/types";
import { GenreEnum } from "../../../entities/genre/types";

type UseFilterSearchParams = {
  keyword: string;
  size?: number;
  sort?: SortFilter;
  genre?: GenreEnum[];
  status?: StatusFilter[];
};

type Cursor = { id: number | null; value: string | null };

export const useFilterSearch = ({
  keyword,
  size,
  genre,
  status,
  sort,
}: UseFilterSearchParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", keyword, genre, status, sort],
    queryFn: ({ pageParam }) =>
      getSearchResult({
        keyword,
        cursor: pageParam
          ? JSON.stringify({ value: pageParam.value, id: pageParam.id })
          : undefined,
        size,
        genre,
        status,
        sort,
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
