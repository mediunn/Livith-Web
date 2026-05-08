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
  enabled?: boolean;
  isLoggedIn?: boolean;
};

export const useInterestConcerts = ({
  size,
  sort,
  enabled = true,
  isLoggedIn = false,
}: UseInterestConcertsParams = {}) => {
  return useInfiniteQuery<
    ApiResponse<InterestConcertListResponse>,
    Error,
    InterestConcertResponse[],
    [string, boolean, number | undefined, InterestSortFilter | undefined],
    CursorInfo | undefined
  >({
    queryKey: ["interest-concerts", isLoggedIn, size, sort],
    refetchOnMount: "always",
    enabled,
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
