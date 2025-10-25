import { useEffect, useState } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import { useInterestConcert } from "../entities/concert/model/useInterestConcert";
import { useLocation } from "react-router-dom";
import SignupCompleteModal from "../features/auth/ui/SignupCompleteModal";

function HomePage() {
  const { data: interest, isLoading: isInterestLoading } = useInterestConcert();
  const concertId = interest?.id ?? null;

  const { data: concert, isLoading: isConcertLoading } =
    useConcertInsideInfo(concertId);
  const { data: schedules = [], isLoading: isScheduleLoading } =
    useSchedule(concertId);

  const isLoading = isInterestLoading || isConcertLoading || isScheduleLoading;

  const location = useLocation();
  const state = location.state as {
    showSignupComplete?: boolean;
    nickname?: string;
  } | null;
  const showSignupComplete = state?.showSignupComplete;
  const nickname = state?.nickname;

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (showSignupComplete) {
      setIsModalOpen(true);
      // 한 번만 띄우도록 URL 상태 초기화
      window.history.replaceState({}, document.title);
    }
  }, [showSignupComplete]);

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
      <SignupCompleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nickname={nickname ?? ""}
      />
    </div>
  );
}

export default HomePage;
