import { SortFilter, StatusFilter } from "../../../entities/concert/types";
import { GenreEnum } from "../../../entities/genre/types";
import CardListSkeleton from "../../../shared/ui/CardSkeleton/CardListSkeleton";
import { EmptyView } from "../../../shared/ui/EmptyView";
import { InfiniteConcertList } from "../../../widgets/InfiniteConcertList";
import { useFilteredConcertList } from "../model/useFilteredConcertList";

type FilteredConcertListProps = {
  sort?: SortFilter;
  genre?: GenreEnum;
  status?: StatusFilter[];
};
function FilteredConcertList({
  sort,
  genre,
  status,
}: FilteredConcertListProps) {
  const size = 12; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFilteredConcertList({
    size,
    sort,
    genre,
    status,
  });

  if (isLoading) {
    return (
      <div className="mx-16 pt-19">
        <CardListSkeleton num={9} />
      </div>
    );
  }
  return (
    <>
      {data?.pages.length === 0 ? (
        <div className="py-100">
          <EmptyView text="콘서트가 없어요" />
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

export default FilteredConcertList;
