import { useInfiniteQuery } from "@tanstack/react-query";
import { getConcertComment } from "../api/getConcertComment";

type UseConcertCommentParams = {
  concertId: number;
  size: number;
};

export const useConcertComment = ({
  concertId,
  size,
}: UseConcertCommentParams) => {
  return useInfiniteQuery({
    queryKey: ["concertComments", concertId],
    queryFn: ({ pageParam }) =>
      getConcertComment({
        concertId,
        cursor: pageParam ?? null,
        size,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor ?? undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.data),
      totalCount: data.pages[0]?.totalCount ?? 0,
      nextCursor: data.pages[data.pages.length - 1]?.cursor ?? null,
    }),
  });
};
