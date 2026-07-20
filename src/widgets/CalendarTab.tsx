import { useState } from "react";

import { MonthlyCalendar } from "../features/calendar/ui/MonthlyCalendar";
import { CalendarFilter } from "../features/calendar/ui/CalendarFilter";

import { ConcertType, ScheduleType } from "../features/calendar/model/types";

export default function CalendarTab() {
  const [scheduleTypes, setScheduleTypes] = useState<ScheduleType[]>([
    ScheduleType.CONCERT,
    ScheduleType.TICKETING,
  ]);

  const [concertType, setConcertType] = useState<ConcertType>(ConcertType.ALL);

  return (
    <div className="flex flex-col gap-4">
      <CalendarFilter
        scheduleTypes={scheduleTypes}
        concertType={concertType}
        onScheduleTypesChange={setScheduleTypes}
        onConcertTypeChange={setConcertType}
      />

      <MonthlyCalendar
        scheduleTypes={scheduleTypes}
        concertType={concertType}
      />
    </div>
  );
}
