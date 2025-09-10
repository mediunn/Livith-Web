import { useConcertList } from "../../../features/concert/model/useConcertList";
import { SelectableInfiniteConcertList } from "./SelectableInfiniteConcertList";
import { StateWithSetter } from "../../../shared/types/props";
import ConcertCardListSkeleton from "../../../features/concert/ui/ConcertCardListSkeleton";

type SelectableConcertListProps = {
  selectedConcertState: StateWithSetter<string | null>;
};

export function SelectableConcertList({
  selectedConcertState,
}: SelectableConcertListProps) {
  const size = 15; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertList({ size });

  if (isLoading) {
    return (
      <div className="mx-16">
        <ConcertCardListSkeleton num={9} />
      </div>
    );
  }
  return (
    <SelectableInfiniteConcertList
      concerts={data?.pages}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isLoading}
      isError={isError}
      selectedConcertState={selectedConcertState}
    />
  );
}

export default SelectableConcertList;
