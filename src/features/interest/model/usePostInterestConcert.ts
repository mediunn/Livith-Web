import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postInterestConcert,
  PostInterestConcertProps,
} from "../api/postInterestConcert";

export const usePostInterestConcert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: PostInterestConcertProps) =>
      postInterestConcert(variables),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["interest-concerts"] });
    },
  });
};
