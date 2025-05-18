import { useSearchResult } from "../model/useSearchResult";
import { InfiniteConcertList } from "../../../shared/ui/InfiniteConcertList";
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
    <div>
      <p className="text-grayScaleBlack5 text-body-md font-medium font-NotoSansKR  mt-24 mx-16">
        검색 결과
        <span className="text-mainYellow30"> {data?.totalCount}건</span>의
        정보가 있어요
      </p>
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
    </div>
  );
}

export default SearchResult;
