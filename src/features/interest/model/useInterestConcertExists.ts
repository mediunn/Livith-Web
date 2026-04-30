import { useQuery } from "@tanstack/react-query";
import {
  getInterestConcertExists,
  InterestConcertExistsResponse,
} from "../api/getInterestConcertExists";
import { ApiResponse } from "../../../shared/types/response";

export const useInterestConcertExists = (id: number, enabled: boolean) => {
  return useQuery<ApiResponse<InterestConcertExistsResponse>>({
    queryKey: ["interestConcertExists", id],
    queryFn: () => getInterestConcertExists(id),
    enabled: enabled && Number.isFinite(id) && id > 0,
  });
};
