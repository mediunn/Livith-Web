import { useMutation } from "@tanstack/react-query";
import { postAlarmConsent } from "../api/postAlarmConsent";

export function useAlarmConsent() {
  return useMutation({
    mutationFn: postAlarmConsent,
  });
}
