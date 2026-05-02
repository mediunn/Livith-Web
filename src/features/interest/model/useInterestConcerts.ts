import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getInterestConcerts,
  InterestConcertResponse,
  InterestConcertListResponse,
  CursorInfo,
} from "../api/getInterestConcerts";
import { ApiResponse } from "../../../shared/types/response";
import { InterestSortFilter } from "../../../entities/concert/types";

type UseInterestConcertsParams = {
  size?: number;
  sort?: InterestSortFilter;
};

export const useInterestConcerts = ({
  size = 20,
  sort,
}: UseInterestConcertsParams = {}) => {
  return useInfiniteQuery<
    ApiResponse<InterestConcertListResponse>,
    Error,
    InterestConcertResponse[],
    [string, number, InterestSortFilter | undefined],
    CursorInfo | undefined
  >({
    queryKey: ["interest-concerts", size, sort],
    refetchOnMount: "always",
    queryFn: ({ pageParam }) =>
      getInterestConcerts({
        size,
        cursorDate: pageParam?.date,
        cursorId: pageParam?.id,
        sort,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.data.cursor ?? undefined,
    select: (data) => data.pages.flatMap((page) => page.data.data),
  });
};
