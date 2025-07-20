import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type ConcertCulture = {
  id: number;
  concertId: number;
  content: string;
  imgUrl: string;
};

export async function getConcertCulture(id: number): Promise<ConcertCulture[]> {
  const response = await axiosInstance.get<ApiResponse<ConcertCulture[]>>(
    `/api/v1/concerts/${id}/cultures`
  );
  return response.data.data;
}
