import { useQuery } from "@tanstack/react-query";
import {
  getHomeConcertListSection,
  HomeSection,
} from "../api/getHomeConcertListSection";

export function useHomeConcertListSection() {
  return useQuery({
    queryKey: ["homeConcertListSection"],
    queryFn: getHomeConcertListSection,
    select: (data: HomeSection[]) => data,
  });
}
