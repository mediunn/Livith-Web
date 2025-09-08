import { useEffect, useState } from "react";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar, { TabType } from "../shared/ui/TabBar";
import { useTabDirection } from "../shared/hooks/useTabDirection";
import { getConcertInsideInfo } from "../entities/concert/api/getConcertInsideInfo";
import { Concert } from "../entities/concert/types";
import { getSchedule, Schedule } from "../entities/concert/api/getSchedule";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import DeleteConcertToastIconMotion from "../shared/assets/DeleteConcertToastIconMotion.json";

function HomePage() {
  const { direction, currentTab, updateDirection } = useTabDirection();

  const [concert, setConcert] = useState<Concert | null>(null);
  const [schedules, setSchedule] = useState<Schedule[]>([]);
  const [interestConcertId, setInterestConcertId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const id = localStorage.getItem("InterestConcertId");
    setInterestConcertId(id);
  }, []);

  useEffect(() => {
    async function fetchConcert() {
      if (!interestConcertId) return;
      try {
        const data = await getConcertInsideInfo(Number(interestConcertId));
        setConcert(data);
      } catch (error) {
        console.error("특정 콘서트 상세 정보 조회 API 호출 실패", error);
      }
    }

    fetchConcert();
  }, [interestConcertId]);

  useEffect(() => {
    const fetchSchedule = async () => {
      if (!interestConcertId) return;
      try {
        const data = await getSchedule(Number(interestConcertId));
        setSchedule(data);
      } catch (error) {
        console.error("특정 콘서트 일정 목록 조회 API 호출 실패:", error);
        setSchedule([]);
      }
    };

    fetchSchedule();
  }, [interestConcertId]);

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

      <TabBar
        onTabChange={(tab) => {
          updateDirection(tab);
        }}
      />
    </div>
  );
}

export default HomePage;
