import { useMutation } from "@tanstack/react-query";
import { updateRead } from "../api/updateRead";

export function useUpdateRead() {
  return useMutation({
    mutationFn: (id: number) => updateRead(id),
  });
}
