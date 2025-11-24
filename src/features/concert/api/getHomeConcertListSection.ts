import { SectionConcert } from "../../../entities/concert/types";
import axiosInstance from "../../../shared/api/axiosInstance";

export type HomeSection = {
  id: number;
  sectionTitle: string;
  concerts: SectionConcert[];
};

export async function getHomeConcertListSection(): Promise<HomeSection[]> {
  const response = await axiosInstance.get("/api/v4/home/sections");
  return response.data.data;
}
