import { ConcertType, ScheduleType } from "../model/types";
import { ConcertTypeFilter } from "./ConcertTypeFilter";
import { ScheduleTypeFilter } from "./ScheduleTypeFilter";

interface Props {
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;

  onScheduleTypesChange: (value: ScheduleType[]) => void;
  onConcertTypeChange: (value: ConcertType) => void;
}

export function CalendarFilter({
  scheduleTypes,
  concertType,
  onScheduleTypesChange,
  onConcertTypeChange,
}: Props) {
  return (
    <div className="flex items-center justify-between p-16">
      <ScheduleTypeFilter
        value={scheduleTypes}
        onChange={onScheduleTypesChange}
      />

      <ConcertTypeFilter value={concertType} onChange={onConcertTypeChange} />
    </div>
  );
}
