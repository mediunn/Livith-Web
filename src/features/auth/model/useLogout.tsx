import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/logout";

export function useLogout() {
  return useMutation({
    mutationFn: () => logout(),
  });
}
