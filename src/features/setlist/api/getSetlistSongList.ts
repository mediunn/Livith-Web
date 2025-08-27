import {
  SetListSong,
  SetlistSongListResponse,
} from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

interface GetSetlistSongListParams {
  setlistId: number;
}
export async function getSetlistSongList({
  setlistId,
}: GetSetlistSongListParams): Promise<ApiResponse<SetListSong[]>> {
  const response = await axiosInstance.get(
    `/api/v3/setlists/${setlistId}/songs`
  );
  return response.data;
}
