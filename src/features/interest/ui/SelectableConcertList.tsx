import { useConcertList } from "../../../features/concert/model/useConcertList";
import { SelectableInfiniteConcertList } from "./SelectableInfiniteConcertList";
import { StateWithSetter } from "../../../shared/types/props";

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
