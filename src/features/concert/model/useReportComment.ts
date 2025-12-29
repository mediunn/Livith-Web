import { useMutation } from "@tanstack/react-query";
import { postReportComment } from "../api/postReportComment";

export function useReportComment() {
  return useMutation({
    mutationFn: postReportComment,
  });
}
