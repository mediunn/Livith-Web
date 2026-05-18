import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  });
};

export const usePatchInterestConcertToast = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchInterestConcertToast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interestConcertToast"] });
    },
  });
};
