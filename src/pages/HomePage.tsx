import { useEffect } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import DeleteConcertToastIconMotion from "../shared/assets/DeleteConcertToastIconMotion.json";

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
  const interestConcertId = localStorage.getItem("InterestConcertId");

  const { data: concert, isLoading: isConcertLoading } = useConcertInsideInfo(
    interestConcertId ? Number(interestConcertId) : null
  );

  const { data: schedules = [], isLoading: isScheduleLoading } = useSchedule(
    interestConcertId ? Number(interestConcertId) : null
  );

  const isLoading = isConcertLoading || isScheduleLoading;

  // 관심 콘서트 삭제 토스트
  useEffect(() => {
    if (localStorage.getItem("deleteConcertToast") === "true") {
      toast(
        <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          <div className="w-24 h-24">
            <Lottie
              animationData={DeleteConcertToastIconMotion}
              loop={false}
              renderer="svg"
              style={{ width: "100%", height: "100%" }}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid meet",
              }}
            />
          </div>
          <span>관심 콘서트가 삭제되었어요</span>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false, // 창이 다른 곳에 있어도 시간 그대로 감
        }
      );
      setTimeout(() => {
        localStorage.removeItem("deleteConcertToast");
      }, 100);
    }
  }, []);

  const group = getExperimentGroup();

  return (
    <div className="pb-90">
      {interestConcertId && concert && !isLoading ? (
        <ConcertSetting concert={concert} schedules={schedules} />
      ) : (
        <>
          <ConcertSettingEmpty group={group} />
        </>
      )}

      <TabBar />
    </div>
  );
}

export default HomePage;
