import { useEffect, useState } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";
import { useSchedule } from "../entities/concert/model/useSchedule";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import DeleteConcertToastIconMotion from "../shared/assets/DeleteConcertToastIconMotion.json";

function HomePage() {
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

  // 관심 콘서트 삭제 토스트
  useEffect(() => {
    if (localStorage.getItem("deleteConcertToast") === "true") {
      toast(
        <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          <Lottie
            animationData={DeleteConcertToastIconMotion}
            loop={false}
            renderer="svg"
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
          />
          <span>관심 콘서트가 삭제되었어요</span>
        </div>,
        {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false, // 창이 다른 곳에 있어도 시간 그대로 감
          onClose: () => {
            localStorage.removeItem("deleteConcertToast");
          },
        }
      );
    }
  }, []);

  return (
    <div className="pb-90">
      {interestConcertId && concert ? (
        <ConcertSetting concert={concert} schedules={schedules} />
      ) : (
        <ConcertSettingEmpty />
      )}

      <TabBar />
    </div>
  );
}

export default HomePage;
