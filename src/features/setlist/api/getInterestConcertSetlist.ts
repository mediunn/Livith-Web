import { Setlist } from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function getInterestConcertSetlist({
  concertId,
}: {
  concertId: number;
}): Promise<ApiResponse<Setlist>> {
  const response = await axiosInstance.get(
    `/concerts/${concertId}/main-setlist`
  );
  return response.data;
}
