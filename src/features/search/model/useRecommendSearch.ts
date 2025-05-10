import { useQuery } from "@tanstack/react-query";
import { getRecommendSearch } from "../api/getRecommendSearch";

function useRecommendSearch({
  letter,
  enabled,
}: {
  letter: string;
  enabled: boolean;
}) {
  return useQuery({
    queryKey: ["recommend", letter],
    queryFn: () => getRecommendSearch({ letter }),
    select: (data) => data.data,
    enabled,
  });
}

export default useRecommendSearch;
