import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRead } from "../api/updateRead";

export function useUpdateRead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => updateRead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["alarms"] });
    },
  });
}
