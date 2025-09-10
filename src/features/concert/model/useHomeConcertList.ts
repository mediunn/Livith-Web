import { useQuery } from "@tanstack/react-query";
import { getHomeConcertList, HomeSection } from "../api/getHomeConcertList";

export function useHomeConcertList() {
  return useQuery({
    queryKey: ["homeConcertList"],
    queryFn: getHomeConcertList,
    select: (data: HomeSection[]) => {
      const popularSection = data.find((section) => section.id === 1);
      return popularSection?.concerts || [];
    },
  });
}
