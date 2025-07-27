import { ConcertFilter } from "../entities/concert/types";
import { useConcertList } from "../features/concert/model/useConcertList";
import { InfiniteConcertList } from "./InfiniteConcertList";

type ConcertListProps = {
  filter: ConcertFilter;
};

export function ConcertList({ filter }: ConcertListProps) {
  const size = 15; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertList({ filter, size });
  return (
    <InfiniteConcertList
      concerts={data?.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isLoading}
      isError={isError}
    />
  );
}

export default ConcertList;
