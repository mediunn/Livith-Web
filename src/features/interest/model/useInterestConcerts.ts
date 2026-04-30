import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getInterestConcerts,
  InterestConcertResponse,
  InterestConcertListResponse,
} from "../api/getInterestConcerts";
import { ApiResponse } from "../../../shared/types/response";
import { ConcertScheduleType } from "../../../entities/concert/types";

type UseInterestConcertsParams = {
  size?: number;
  cursorDate?: string;
  cursorId?: number;
  sort?: ConcertScheduleType;
};

export const useInterestConcerts = ({
  size,
  cursorDate,
  cursorId,
  sort,
}: UseInterestConcertsParams = {}) => {
  return useInfiniteQuery<
    ApiResponse<InterestConcertListResponse>,
    Error,
    InterestConcertResponse[] | null
  >({
    queryKey: ["interest-concerts", size, cursorDate, cursorId, sort],
    refetchOnMount: "always",
    queryFn: ({ pageParam }) =>
      getInterestConcerts({
        size,
        cursorDate,
        cursorId: (pageParam as number) ?? cursorId,
        sort,
      }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => lastPage.data.cursor ?? undefined,
    select: (data) => {
      if (!data) return null;
      const items = data.pages.flatMap((page) => page.data.data);
      return items.length ? items : null;
    },
  });
};
