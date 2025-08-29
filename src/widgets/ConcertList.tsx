import { useConcertList } from "../features/concert/model/useConcertList";
import { InfiniteConcertList } from "./InfiniteConcertList";

export function ConcertList() {
  const size = 15; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertList({ size });
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
