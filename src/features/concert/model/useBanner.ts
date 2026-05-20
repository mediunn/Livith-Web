import { useQuery } from "@tanstack/react-query";
import { getBanner } from "../api/getBanner";

export type Banner = {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
  content: string;
};

export function useBanner() {
  return useQuery({
    queryKey: ["bannerList"],
    queryFn: getBanner,
  });
}
