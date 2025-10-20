import { useQuery } from "@tanstack/react-query";
import { getInterestConcert } from "../api/getInterestConcert";

export const useInterestConcert = () => {
  return useQuery({
    queryKey: ["interest-concert"],
    queryFn: getInterestConcert,
  });
};
