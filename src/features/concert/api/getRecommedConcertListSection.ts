import { RecommendConcert } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";

export async function getRecommedConcertListSection(): Promise<
  RecommendConcert[]
> {
  const response = await axiosInstance.get("/recommendation/concerts");

  return response.data.data;
}
