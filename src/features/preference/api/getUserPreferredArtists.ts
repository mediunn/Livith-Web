import { UserFeaturedArtist } from "../../../entities/featured-artist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

async function getUserPreferredArtists(): Promise<UserFeaturedArtist[]> {
  const response = await axiosInstance.get<ApiResponse<UserFeaturedArtist[]>>(
    "/users/artist-preferences",
  );
  return response.data.data;
}

export default getUserPreferredArtists;
