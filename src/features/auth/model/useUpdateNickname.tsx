import { useMutation } from "@tanstack/react-query";
import { updateNickname } from "../api/updateNickname";

export function useUpdateNickname() {
  return useMutation({
    mutationFn: (nickname: string) => updateNickname(nickname),
  });
}
