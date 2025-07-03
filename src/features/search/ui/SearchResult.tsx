import { useSearchResult } from "../model/useSearchResult";
import { InfiniteConcertList } from "../../../widgets/InfiniteConcertList";
import EmptySearchResult from "./EmptySearchResult";

function SearchResult({ keyword }: { keyword: string }) {
  const size = 12; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchResult({ keyword, size });

  return (
    <>
      {data?.totalCount === 0 ? (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
          <EmptySearchResult />
        </div>
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
