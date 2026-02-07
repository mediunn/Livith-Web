import { UserFeaturedArtist } from "../../../entities/featured-artist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function setUserPreferredArtists(
  artistIds: number[],
): Promise<UserFeaturedArtist[]> {
  const response = await axiosInstance.put<ApiResponse<UserFeaturedArtist[]>>(
    "/users/artist-preferences",
    {
      artistIds,
    },
  );
  return response.data.data;
}
