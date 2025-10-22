import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteConcertComment } from "../api/deleteConcertComment";

export function useDeleteConcertComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteConcertComment,
    onSuccess: (_, id: number) => {
      queryClient.invalidateQueries({ queryKey: ["concertComments"] });
    },
  });
}
