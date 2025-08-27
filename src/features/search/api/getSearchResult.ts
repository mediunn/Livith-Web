import { ConcertListResponse } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type GetSearchResultProps = {
  keyword: string;
  cursor?: number | null;
  size?: number | null;
};
export async function getSearchResult({
  keyword,
  cursor,
  size,
}: GetSearchResultProps): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/api/v3/search", {
    params: {
      keyword,
      cursor,
      size,
    },
  });
  return response.data;
}
