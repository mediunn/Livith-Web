import { useEffect } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import { useInterestConcert } from "../entities/concert/model/useInterestConcert";

function HomePage() {
  const { data: interest, isLoading: isInterestLoading } = useInterestConcert();
  const concertId = interest?.id ?? null;

  const { data: concert, isLoading: isConcertLoading } =
    useConcertInsideInfo(concertId);
  const { data: schedules = [], isLoading: isScheduleLoading } =
    useSchedule(concertId);

  const isLoading = isInterestLoading || isConcertLoading || isScheduleLoading;

  return (
    <div className="pb-90">
      {concertId && concert && !isLoading ? (
        <ConcertSetting
          concertId={concertId}
          concert={concert}
          schedules={schedules}
        />
      ) : (
        <ConcertSettingEmpty />
      )}

      <TabBar />
    </div>
  );
}

export default HomePage;
