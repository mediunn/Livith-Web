import { useQuery } from "@tanstack/react-query";
import {
  getSearchConcertListSection,
  SearchSection,
} from "../api/getSearchConcertListSection";

export function useSearchConcertListSection() {
  return useQuery({
    queryKey: ["searchConcertListSection"],
    queryFn: getSearchConcertListSection,
    select: (data: SearchSection[]) => data,
  });
}
