import { SectionConcert } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";

export type SearchSection = {
  id: number;
  sectionTitle: string;
  concerts: SectionConcert[];
};

export async function getSearchConcertListSection(): Promise<SearchSection[]> {
  const response = await axiosInstance.get("/search/sections");
  return response.data.data;
}
