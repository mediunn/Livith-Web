import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/signup";
import { SignupRequest } from "../../../entities/user/types";

export function useSignup() {
  return useMutation({
    mutationFn: (userData: SignupRequest) => signup(userData),
  });
}
