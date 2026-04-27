import { useInfiniteQuery } from "@tanstack/react-query";
import { getFilteredConcertList } from "../api/getFilteredConcertList";
import { SortFilter } from "../../../entities/concert/types";
import { StatusFilter } from "../../../entities/concert/types";
import { GenreEnum } from "../../../entities/genre/types";

type useFilteredConcertListParams = {
  size?: number;
  sort?: SortFilter;
  genre?: GenreEnum;
  status?: StatusFilter[];
};

export const useFilteredConcertList = ({
  size,
  genre,
  status,
  sort,
}: useFilteredConcertListParams) => {
  return useInfiniteQuery({
    queryKey: ["concerts", genre, status, sort],
    queryFn: ({ pageParam }) =>
      getFilteredConcertList({
        cursor: pageParam ?? undefined,
        size,
        genre,
        status,
        sort,
      }),
    initialPageParam: undefined as number | undefined,
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
