import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";
import { Concert } from "../types/index"; // index.ts에서 export된 타입 사용

export async function getConcertInsideInfo(id: number): Promise<Concert> {
  const response = await axiosInstance.get<ApiResponse<Concert>>(
    `/concerts/${id}`,
  );
  return response.data.data;
}
