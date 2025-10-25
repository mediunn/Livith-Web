import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInterestConcert } from "../../../entities/concert/api/deleteInterestConcert";

export const useDeleteInterestConcert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteInterestConcert(),
    onSuccess: () => {
      // 삭제 성공 시 목록 invalidate
      queryClient.invalidateQueries({ queryKey: ["interest-concert"] });
    },
  });
};
