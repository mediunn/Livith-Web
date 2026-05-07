import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteInterestConcert,
  DeleteInterestConcertProps,
} from "../api/deleteInterestConcert";

export const useDeleteInterestConcert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: DeleteInterestConcertProps) =>
      deleteInterestConcert(variables),
    retry: false,
    networkMode: "always",
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interest-concerts"] });
    },
  });
};
