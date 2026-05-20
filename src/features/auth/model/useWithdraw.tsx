import { useMutation } from "@tanstack/react-query";
import { withdraw } from "../api/withdraw";

export function useWithdraw() {
  return useMutation({
    mutationFn: (reason: string) => withdraw(reason),
  });
}
