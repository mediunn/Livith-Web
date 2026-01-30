import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import SignupCompleteModal from "../features/auth/ui/SignupCompleteModal";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import { useInterestConcert } from "../features/interest/model/useInterestConcert";
import TabBar from "../shared/ui/TabBar";
import TopBar from "../shared/ui/TopBar";
import GuidedBanner from "../shared/ui/GuidedBanner";

// A/B 테스트 그룹 배정 유틸
function getExperimentGroup(): "A" | "B" | "C" {
  let group = localStorage.getItem("induceSignupTooltipGroup") as
    | "A"
    | "B"
    | "C"
    | null;
  if (!group) {
    const random = Math.random();
    if (random < 1 / 3) group = "A";
    else if (random < 2 / 3) group = "B";
    else group = "C";

    localStorage.setItem("induceSignupTooltipGroup", group);
  }
  return group;
}

function HomePage() {
  const { data: interest, isLoading: isInterestLoading } = useInterestConcert();
  const concertId = interest?.id ?? null;

  const { data: concert, isLoading: isConcertLoading } =
    useConcertInsideInfo(concertId);
  const { data: schedules = [], isLoading: isScheduleLoading } =
    useSchedule(concertId);

  const isLoading = isInterestLoading || isConcertLoading || isScheduleLoading;

  const group = getExperimentGroup();

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
        <>
          <TopBar bgColor="bg-grayScaleBlack100" />
          <ConcertSetting
            concertId={concertId}
            concert={concert}
            schedules={schedules}
          />
        </>
      ) : (
        <>
          <TopBar bgColor="bg-grayScaleBlack90" />
          {/* <GuidedBanner
            content="회원가입하러 가기"
            compactTitle="나의 취향이 담긴 콘서트 추천받기"
            compactContent="회원가입하고 콘서트 정보를 빠르게 확인해요"
          /> */}
          <GuidedBanner
            content="취향 선택하러 가기"
            compactTitle="취향 선택하러 가기"
            compactContent="나의 취향이 담긴 콘서트를 추천받을 수 있어요"
          />
          <ConcertSettingEmpty group={group} />
        </>
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
