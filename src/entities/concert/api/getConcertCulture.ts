import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type ConcertCulture = {
  id: number;
  concertId: number;
  content: string;
  title: string;
};

export async function getConcertCulture(id: number): Promise<ConcertCulture[]> {
  const response = await axiosInstance.get<ApiResponse<ConcertCulture[]>>(
    `/api/v4/concerts/${id}/cultures`
  );
  return response.data.data;
}
