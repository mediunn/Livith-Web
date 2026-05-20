import { ConcertListResponse } from "../../../entities/concert/types";
import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type GetConcertListParams = {
  cursor?: number | null;
  size?: number | null;
};

export async function getConcertList({
  cursor,
  size,
}: GetConcertListParams): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/concerts", {
    params: {
      cursor,
      size,
    },
  });
  return response.data;
}
