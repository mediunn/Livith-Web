import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";
import { FeaturedArtistListResponse } from "../types";

type SearchFeaturedArtistProps = {
  keyword?: string | null;
  cursor?: number | null;
  size?: number | null;
};

async function searchFeaturedArtist({
  keyword,
  cursor,
  size,
}: SearchFeaturedArtistProps): Promise<FeaturedArtistListResponse> {
  const response = await axiosInstance.get<
    ApiResponse<FeaturedArtistListResponse>
  >("/search/artists", {
    params: {
      keyword,
      cursor,
      size,
    },
  });

  return response.data.data;
}
export default searchFeaturedArtist;
