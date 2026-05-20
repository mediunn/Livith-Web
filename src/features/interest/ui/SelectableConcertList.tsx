import { useConcertList } from "../../../features/concert/model/useConcertList";
import { SelectableInfiniteConcertList } from "./SelectableInfiniteConcertList";
import { StateWithSetter } from "../../../shared/types/props";
import CardListSkeleton from "../../../shared/ui/CardSkeleton/CardListSkeleton";
import type { SelectedConcert } from "../../../pages/SetInterestConcertPage";

type SelectableConcertListProps = {
  selectedConcertsState: StateWithSetter<SelectedConcert[]>;
};

export function SelectableConcertList({
  selectedConcertsState,
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
        <CardListSkeleton num={9} />
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
      selectedConcertsState={selectedConcertsState}
    />
  );
}

export default SelectableConcertList;
