import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../shared/ui/SearchBar";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";
import { getSchedule, Schedule } from "../entities/concert/api/getSchedule";

function HomePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const [schedules, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await getSchedule(Number(concertId));
        setSchedule(data);
      } catch (error) {
        console.error("특정 콘서트 일정 목록 조회 API 호출 실패:", error);
        setSchedule([]);
      }
    };

    fetchSchedule();
  }, [concertId]);

  return (
    <div className="pb-90">
      <SearchBar></SearchBar>
      {/* <ConcertSettingEmpty></ConcertSettingEmpty> */}
      <ConcertSetting schedules={schedules}></ConcertSetting>
      <TabBar></TabBar>
    </div>
  );
}

export default HomePage;
