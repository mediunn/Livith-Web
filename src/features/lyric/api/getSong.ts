import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Song = {
  id: number;
  title: string;
  artist: string;
  lyrics: string[];
  pronunciation: string[];
  translation: string[];
};

export async function getSong(id: number): Promise<Song> {
  const response = await axiosInstance.get<ApiResponse<Song>>(`/songs/${id}`);
  return response.data.data;
}
