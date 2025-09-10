import { useQuery } from "@tanstack/react-query";
import {
  getSearchConcertList,
  SearchSection,
} from "../api/getSearchConcertList";

export function useSearchConcertList(sectionId: number) {
  return useQuery({
    queryKey: ["searchConcertList", sectionId],
    queryFn: async () => {
      const data: SearchSection[] = await getSearchConcertList();
      const section = data.find((sec) => sec.id === sectionId);
      return section
        ? { concerts: section.concerts, sectionTitle: section.sectionTitle }
        : { concerts: [], sectionTitle: "" };
    },
  });
}
