import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Artist = {
  id: number;
  artist: string;
  debutDate: string;
  category: string;
  detail: string;
  instagramUrl: string;
  keywords: string[];
  imgUrl: string;
};

export async function getArtistInfo(id: number): Promise<Artist> {
  const response = await axiosInstance.get<ApiResponse<Artist>>(
    `/concerts/${id}/artist`
  );
  return response.data.data;
}
