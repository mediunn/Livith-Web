import { InterestSortFilter } from "../../../entities/concert/types";
import { Concert } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export type InterestConcertResponse = Concert & {
  preSaleDate: string;
  generalSaleDate: string | null;
};

export type CursorInfo = {
  date: string;
  id: number;
};

interface GetInterestConcertsProps {
  size?: number;
  cursorDate?: string;
  cursorId?: number;
  sort?: InterestSortFilter;
}

export type InterestConcertListResponse = {
  data: InterestConcertResponse[];
  cursor: CursorInfo | null;
};

export const getInterestConcerts = async ({
  size,
  cursorDate,
  cursorId,
  sort,
}: GetInterestConcertsProps): Promise<
  ApiResponse<InterestConcertListResponse>
> => {
  const token = localStorage.getItem("accessToken");

  const response = await axiosInstance.get(`/users/interest-concerts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      ...(size !== undefined && { size }),
      ...(cursorDate && { cursorDate }),
      ...(cursorId && { cursorId }),
      sort,
    },
  });

  return response.data;
};
