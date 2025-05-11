import {
  SetlistDetailProps,
  SetlistResponse,
} from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function getSetlistDetail({
  concertId,
  setlistId,
}: SetlistDetailProps): Promise<ApiResponse<SetlistResponse>> {
  const response = await axiosInstance.get(
    `/concerts/${concertId}/setlists/${setlistId}`
  );
  return response.data;
}
