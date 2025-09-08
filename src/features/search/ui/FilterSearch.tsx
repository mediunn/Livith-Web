import { InfiniteConcertList } from "../../../widgets/InfiniteConcertList";
import EmptySearchResult from "./EmptySearchResult";
import {
  GenreFilter,
  SortFilter,
  StatusFilter,
} from "../../../entities/concert/types";
import { useFilterSearch } from "../model/useFilterSearch";
import useDebounce from "../model/useDebounce";
import { useState } from "react";

type FilterSearchProps = {
  keyword: string;
  sort?: SortFilter;
  genre?: GenreFilter[];
  status?: StatusFilter[];
};
function FilterSearch({ keyword, sort, genre, status }: FilterSearchProps) {
  const size = 12; // 페이지당 항목 수
  //debounce 적용
  const [isDebouncing, setIsDebouncing] = useState(false);
  const debounceValue = useDebounce({
    value: keyword,
    delay: 400,
    setIsDebouncing,
  });
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFilterSearch({ keyword: debounceValue, size, sort, genre, status });

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
          isSearch={true}
        />
      )}
    </>
  );
}

export default FilterSearch;
