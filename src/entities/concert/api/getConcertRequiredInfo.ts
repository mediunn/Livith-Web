import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type ConcertRequired = {
  id: number;
  category: string;
  content: string;
  imgUrl: string;
};

export async function getConcertRequiredInfo(
  id: number
): Promise<ConcertRequired[]> {
  const response = await axiosInstance.get<ApiResponse<ConcertRequired[]>>(
    `/api/v3/concerts/${id}/info`
  );
  return response.data.data;
}
