import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setInterestConcert,
  SetInterestConcertProps,
} from "../api/setInterestConcert";

export const useSetInterestConcert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: SetInterestConcertProps) =>
      setInterestConcert(variables),
    onSuccess: async () => {
      // 무효화 키는 useInterestConcerts에서 사용하는 키와 일치시킴
      await queryClient.invalidateQueries({ queryKey: ["interest-concerts"] });
    },
  });
};
