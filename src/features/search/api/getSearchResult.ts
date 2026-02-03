import {
  ConcertListResponse,
  SortFilter,
  StatusFilter,
} from "../../../entities/concert/types";
import { GenreEnum } from "../../../entities/genre/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type GetSearchResultProps = {
  keyword: string;
  cursor?: string | null;
  size?: number | null;
  genre?: GenreEnum[] | null;
  status?: StatusFilter[] | null;
  sort?: SortFilter | null;
};
export async function getSearchResult({
  keyword,
  cursor,
  size,
  genre,
  status,
  sort,
}: GetSearchResultProps): Promise<ApiResponse<ConcertListResponse>> {
  const response = await axiosInstance.get("/search/concerts", {
    params: {
      keyword,
      cursor,
      size,
      genre: genre?.length ? genre : undefined, // 하나든 여러개든 배열로 보냄
      status: status?.length ? status : undefined,
      sort,
    },
    // 배열을 쿼리 파라미터로 보낼 때 key=value1&key=value2 형태로 보내기 위한 설정
    paramsSerializer: (params) => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => searchParams.append(key, v as string));
        } else if (value !== undefined) {
          searchParams.append(key, value as string);
        }
      });
      return searchParams.toString();
    },
  });
  return response.data;
}
