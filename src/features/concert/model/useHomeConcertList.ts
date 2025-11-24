import { useQuery } from "@tanstack/react-query";
import { getHomeConcertList, HomeSection } from "../api/getHomeConcertList";

export function useHomeConcertList() {
  return useQuery({
    queryKey: ["homeConcertList"],
    queryFn: getHomeConcertList,
    select: (data: HomeSection[]) => data,
  });
}
