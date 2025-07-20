import { Setlist, SetlistDetailProps } from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function getSetlistDetail({
  concertId,
  setlistId,
}: SetlistDetailProps): Promise<ApiResponse<Setlist>> {
  const response = await axiosInstance.get(
    `/api/v1/concerts/${concertId}/setlists/${setlistId}`
  );
  return response.data;
}
