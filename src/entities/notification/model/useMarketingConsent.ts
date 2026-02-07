import { useMutation } from "@tanstack/react-query";
import { postMarketingConsent } from "../api/postMarketingConsent";

export function useMarketingConsent() {
  return useMutation({
    mutationFn: postMarketingConsent,
  });
}
