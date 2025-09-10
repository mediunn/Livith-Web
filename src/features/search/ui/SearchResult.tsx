import { useSearchResult } from "../model/useSearchResult";
import { InfiniteConcertList } from "../../../widgets/InfiniteConcertList";
import EmptySearchResult from "./EmptySearchResult";
import { StateWithSetter } from "../../../shared/types/props";
import { SelectableInfiniteConcertList } from "../../../features/interest/ui/SelectableInfiniteConcertList";
import ConcertCardListSkeleton from "../../../features/concert/ui/ConcertCardListSkeleton";

type SearchResultProps = {
  keyword: string;
  selectedConcertState?: StateWithSetter<string | null>;
};
function SearchResult({ keyword, selectedConcertState }: SearchResultProps) {
  const size = 12; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchResult({ keyword, size });

  window.amplitude.track("click_search_complete");

  if (isLoading) {
    return (
      <div className="mx-16">
        <ConcertCardListSkeleton num={9} />
      </div>
    );
  }

  return (
    <>
      {data?.totalCount === 0 ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
          <EmptySearchResult />
        </div>
      ) : selectedConcertState ? (
        <SelectableInfiniteConcertList
          concerts={data?.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          isError={isError}
          selectedConcertState={selectedConcertState}
        />
      ) : (
        <InfiniteConcertList
          concerts={data?.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </>
  );
}

export default SearchResult;
