import { SetlistResponse, SetlistType } from "../../../entities/setlist/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

type GetSetlistCollectionProps = {
  type: SetlistType;
  concertId: number;
  cursor?: string | null;
  size?: number | null;
};

export async function getSetlistCollection({
  type,
  size,
  cursor,
  concertId,
}: GetSetlistCollectionProps): Promise<ApiResponse<SetlistResponse>> {
  const response = await axiosInstance.get(`/concerts/${concertId}/setlists`, {
    params: {
      type,
      size,
      cursor,
    },
  });
  return response.data;
}
