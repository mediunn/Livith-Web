import { useInView } from "react-intersection-observer";
import PreferenceCard from "../../../features/preference/ui/PreferenceCard";
import EmptySearchResult from "../../../features/search/ui/EmptySearchResult";
import { StateWithSetter } from "../../../shared/types/props";
import CardListSkeleton from "../../../shared/ui/CardSkeleton/CardListSkeleton";
import useInfiniteSearchFeaturedArtist from "../model/useInfiniteSearchFeaturedArtist";
import useDebounce from "../../../shared/hooks/useDebounce";
import { useEffect, useState } from "react";
import { FeaturedArtist } from "../types";

type InfiniteFeaturedArtistListProps = {
  keyword: string;
  preferredState: StateWithSetter<{ id: number; label: string }[]>;
  isFocused?: boolean;
};

function InfiniteFeaturedArtistList({
  keyword,
  preferredState,
  isFocused,
}: InfiniteFeaturedArtistListProps) {
  const size = 20; // 페이지당 항목 수

  //debounce 적용
  const [isDebouncing, setIsDebouncing] = useState(false);
  const debounceValue = useDebounce({
    value: keyword,
    delay: 400,
    setIsDebouncing,
  });

  const {
    data: artists,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteSearchFeaturedArtist({ keyword: debounceValue, size });

  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage && fetchNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading) {
    return (
      <div className="mx-16">
        <CardListSkeleton num={9} />
      </div>
    );
  }

  if (isError) return null;

  return (
    <>
      {artists?.totalCount === 0 ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
          <EmptySearchResult />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {(artists?.pages ?? []).map((artist: FeaturedArtist) => (
            <div key={artist.id}>
              <PreferenceCard
                id={artist.id}
                label={artist.name}
                imgUrl={artist.imgUrl}
                preferredState={preferredState}
              />
            </div>
          ))}

          {isFetchingNextPage && <div>Loading more...</div>}

          {hasNextPage && <div ref={ref} className="h-10" />}
        </div>
      )}
    </>
  );
}

export default InfiniteFeaturedArtistList;
