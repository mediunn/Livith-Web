import {
  ConcertListResponse,
  ConcertFilter,
} from "../../../entities/concert/types";
import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type GetConcertListParams = {
  filter: ConcertFilter;
  cursor?: number | null;
  size?: number | null;
};

export async function getConcertList({
  filter,
  cursor,
  size,
}: GetConcertListParams): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/api/v3/concerts", {
    params: {
      filter,
      cursor,
      size,
    },
  });

  return response.data;
}
