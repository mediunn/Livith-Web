import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setConcertComment } from "../api/setConcertComment";

interface useSetConcertCommentProps {
  concertId: number;
  accessToken: string;
}

export const useSetConcertComment = ({
  concertId,
  accessToken,
}: useSetConcertCommentProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) =>
      setConcertComment({ concertId, content, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["concertComments", concertId],
      });
    },
  });
};
