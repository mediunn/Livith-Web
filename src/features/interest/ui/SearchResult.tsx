import { useSearchResult } from "../../search/model/useSearchResult";
import { InfiniteConcertList } from "../../../widgets/InfiniteConcertList";
import EmptySearchResult from "../../search/ui/EmptySearchResult";
import { StateWithSetter } from "../../../shared/types/props";
import { SelectableInfiniteConcertList } from "./SelectableInfiniteConcertList";
import CardListSkeleton from "../../../shared/ui/CardSkeleton/CardListSkeleton";
import { StatusFilter } from "../../../entities/concert/types";

type SelectedConcert = {
  id: string;
  title: string;
};

type SearchResultProps = {
  keyword: string;
  selectedConcertsState?: StateWithSetter<SelectedConcert[]>;
};
function SearchResult({ keyword, selectedConcertsState }: SearchResultProps) {
  const size = 12; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchResult({
    keyword,
    size,
    status: [StatusFilter.ONGOING, StatusFilter.UPCOMING],
  });

  window.amplitude.track("click_search_complete");

  if (isLoading) {
    return (
      <div className="mx-16">
        <CardListSkeleton num={9} />
      </div>
    );
  }

  return (
    <>
      {data?.totalCount === 0 ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
          <EmptySearchResult />
        </div>
      ) : selectedConcertsState ? (
        <SelectableInfiniteConcertList
          concerts={data?.pages}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isLoading={isLoading}
          isError={isError}
          selectedConcertsState={selectedConcertsState}
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
