import { useEffect, useState } from "react";
import SearchBar from "../shared/ui/SearchBar";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { getSchedule, Schedule } from "../entities/concert/api/getSchedule";

function HomePage() {
  const [schedules, setSchedule] = useState<Schedule[]>([]);
  const [interestConcertId, setInterestConcertId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const id = localStorage.getItem("InterestConcertId");
    setInterestConcertId(id);
  }, []);

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

  return (
    <div className="pb-90">
      <SearchBar />
      {interestConcertId ? (
        <ConcertSetting schedules={schedules} />
      ) : (
        <ConcertSettingEmpty />
      )}
      <TabBar />
    </div>
  );
}

export default HomePage;
