import { ConcertStatus } from "../../../entities/concert/types";
import { useConcertList } from "../model/useConcertList";
import { InfiniteConcertList } from "../../../shared/ui/InfiniteConcertList";

type ConcertListProps = {
  status: ConcertStatus;
};

export function ConcertList({ status }: ConcertListProps) {
  const size = 15; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertList({ status, size });
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
