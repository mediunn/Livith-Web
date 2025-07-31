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
  // const params: Record<string, any> = {
  //   filter,
  //   size,
  // };

  // if (cursor !== null && cursor !== undefined) {
  //   params[filter === ConcertFilter.NEW ? "id" : "sortedIndex"] = cursor;
  // }

  const response = await axiosInstance.get("/api/v2/concerts", {
    params: {
      filter,
      cursor,
      size,
    },
  });

  return response.data;
}
