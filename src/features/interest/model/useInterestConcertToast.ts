import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getInterestConcertToast,
  patchInterestConcertToast,
} from "../api/interestConcertToast";

export const useGetInterestConcertToast = (enabled: boolean) => {
  return useQuery({
    queryKey: ["interestConcertToast"],
    queryFn: getInterestConcertToast,
    enabled,
    staleTime: 0,
    gcTime: 0,
  });
};

export const usePatchInterestConcertToast = () => {
  return useMutation({
    mutationFn: patchInterestConcertToast,
  });
};
