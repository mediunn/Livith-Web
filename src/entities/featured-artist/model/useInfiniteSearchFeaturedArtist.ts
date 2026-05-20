import { useInfiniteQuery } from "@tanstack/react-query";
import searchFeaturedArtist from "../api/searchFeaturedArtist";

type useInfiniteSearchFeaturedArtistParams = {
  keyword?: string;
  size?: number;
  cursor?: number;
};

function useInfiniteSearchFeaturedArtist({
  keyword,
  size,
  cursor,
}: useInfiniteSearchFeaturedArtistParams) {
  return useInfiniteQuery({
    queryKey: ["featured-artist", keyword],
    queryFn: ({ pageParam }) =>
      searchFeaturedArtist({
        keyword,
        cursor: pageParam ? pageParam : undefined,
        size,
      }),
    initialPageParam: cursor,
    getNextPageParam: (lastPage) => {
      return lastPage.cursor;
    },
    select: (data) => {
      return {
        pages: data.pages.flatMap((page) => page.data),
        totalCount: data.pages[0].totalCount,
        pageParams: data.pageParams,
      };
    },
  });
}

export default useInfiniteSearchFeaturedArtist;
