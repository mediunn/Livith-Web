import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/signup";
import { SignupRequest } from "../../../entities/user/types";

export function useSignup() {
  return useMutation({
    mutationFn: ({ userData, client }: SignupRequest) =>
      signup({ userData, client }),
    onError: (error: any) => {
      console.error("회원가입 실패:", error);
    },
  });
}
