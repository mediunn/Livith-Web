import { SetlistSongListResponse } from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

interface GetSetlistSongListParams {
  cursor?: number | null;
  size?: number | null;
  setlistId: number;
}
export async function getSetlistSongList({
  cursor,
  size,
  setlistId,
}: GetSetlistSongListParams): Promise<ApiResponse<SetlistSongListResponse>> {
  const response = await axiosInstance.get(`/setlists/${setlistId}/songs`, {
    params: {
      size,
      cursor,
    },
  });
  return response.data;
}
