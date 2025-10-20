import { useInfiniteQuery } from "@tanstack/react-query";
import { getConcertComment } from "../api/getConcertComment";

type UseConcertCommentParams = {
  concertId: number;
};

export const useConcertCommentInfinite = ({
  concertId,
}: UseConcertCommentParams) => {
  return useInfiniteQuery({
    queryKey: ["concertComments", concertId],
    queryFn: ({ pageParam }) =>
      getConcertComment({
        concertId,
        cursor: pageParam ?? null,
        size: 15,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.data?.cursor ?? undefined,
    select: (data) => ({
      comments: data.pages.flatMap((page) => page?.data?.data || []),
      pageParams: data.pageParams,
      totalCount: data.pages[0]?.data?.totalCount ?? 0,
    }),
    enabled: !!concertId,
  });
};
