import { useMutation } from "@tanstack/react-query";
import {
  postConcertRequest,
  PostConcertRequestProps,
} from "../api/postConcertRequest";

export const usePostConcertRequest = () => {
  return useMutation({
    mutationFn: (variables: PostConcertRequestProps) =>
      postConcertRequest(variables),
    retry: false,
    networkMode: "always",
  });
};
