import { ConcertScheduleType } from "../../../entities/concert/types";
import { Concert } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export type InterestConcertResponse = Concert & {
  preSaleDate: string;
  ticketingDate: string;
};

interface GetInterestConcertsProps {
  size?: number;
  cursorDate?: string;
  cursorId?: number;
  sort?: ConcertScheduleType;
}

export type InterestConcertListResponse = {
  data: InterestConcertResponse[];
  cursor: number | null;
  totalCount?: number;
};

export const getInterestConcerts = async ({
  size,
  cursorDate,
  cursorId,
  sort,
}: GetInterestConcertsProps): Promise<ApiResponse<InterestConcertListResponse>> => {
  const token = localStorage.getItem("accessToken");

  const response = await axiosInstance.get(`/users/interest-concerts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      size,
      cursorDate,
      cursorId,
      sort,
    },
  });

  return response.data;
};
