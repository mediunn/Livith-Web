import {
  ConcertListResponse,
  ConcertStatus,
} from "../../../entities/concert/types";
import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type GetConcertListParams = {
  status: ConcertStatus;
  cursor?: number | null;
  size?: number | null;
};

export async function getConcertList({
  status,
  cursor,
  size,
}: GetConcertListParams): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/api/v1/concerts", {
    params: {
      status,
      cursor,
      size,
    },
  });
  return response.data;
}
