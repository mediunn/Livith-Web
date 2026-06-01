import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateReadAll } from "../api/updateReadAll";

export function useUpdateReadAll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateReadAll,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alarms"] });
    },
  });
}
