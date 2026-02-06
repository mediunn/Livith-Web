import { useQuery } from "@tanstack/react-query";
import { RecommendConcert } from "../../../entities/concert/types";
import { getRecommedConcertListSection } from "../api/getRecommedConcertListSection";

export function useRecommendConcertListSection(enabled: boolean) {
  return useQuery<RecommendConcert[]>({
    queryKey: ["recommendConcertListSection"],
    queryFn: getRecommedConcertListSection,
    enabled,
  });
}
