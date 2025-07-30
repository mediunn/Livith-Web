import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function getRecommendSearch({
  letter,
}: {
  letter: string;
}): Promise<ApiResponse<string[]>> {
  const response = await axiosInstance.get("/api/v2/search/suggestions", {
    params: {
      letter,
    },
  });
  return response.data;
}
