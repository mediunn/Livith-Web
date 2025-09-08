import { useEffect, useState } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { useTabDirection } from "../shared/hooks/useTabDirection";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";

function HomePage() {
  const { updateDirection } = useTabDirection();
  const [interestConcertId, setInterestConcertId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const id = localStorage.getItem("InterestConcertId");
    setInterestConcertId(id);
  }, []);

  const { data: concert, isLoading: isConcertLoading } = useConcertInsideInfo(
    interestConcertId ? Number(interestConcertId) : null
  );

  const { data: schedules = [], isLoading: isScheduleLoading } = useSchedule(
    interestConcertId ? Number(interestConcertId) : null
  );

  const isLoading = isConcertLoading || isScheduleLoading;

  if (isLoading) {
    return null;
  }

  return (
    <div className="pb-90">
      {interestConcertId && concert ? (
        <ConcertSetting concert={concert} schedules={schedules} />
      ) : (
        <ConcertSettingEmpty />
      )}

      <TabBar
        onTabChange={(tab) => {
          updateDirection(tab);
        }}
      />
    </div>
  );
}

export default HomePage;
