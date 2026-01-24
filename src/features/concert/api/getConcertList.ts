import { ConcertListResponse } from "../../../entities/concert/types";
import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type GetConcertListParams = {
  id?: number | null;
  cursor?: string | null;
  size?: number | null;
};

export async function getConcertList({
  id,
  cursor,
  size,
}: GetConcertListParams): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/api/v4/concerts", {
    params: {
      id,
      cursor,
      size,
    },
  });
  return response.data;
}
