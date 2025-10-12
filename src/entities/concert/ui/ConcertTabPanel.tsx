import { useEffect, useState } from "react";
import ScheduleInfo from "./ScheduleInfo";
import RequiredInfo from "./RequiredInfo";
import MdInfo from "./MdInfo";
import { Schedule } from "../api/getSchedule";
import { ConcertRequired } from "../api/getConcertRequiredInfo";
import { Md } from "../api/getMd";
<<<<<<< HEAD
import TicketWebsiteBtn from "../../../shared/ui/TicketWebsiteBtn";
=======
import AGroupTicketWebsiteBtn from "../../../shared/ui/AGroupTicketWebsiteBtn";
import BGroupTicketWebsiteBtn from "../../../shared/ui/BGroupTicketWebsiteBtn";
>>>>>>> 3ece216 (feat : 3차 A/B 테스트 애널리틱스 이벤트 삭제)
import ConcertSettingSnackBar from "../../../shared/ui/ConcertSettingSnackBar";

interface ConcertTabPanelProps {
  concertId: number;
  ticketUrl: string;
  schedules: Schedule[] | null;
  concertRequiredInfo: ConcertRequired[] | null;
  mds: Md[] | null;
}

function ConcertTabPanel({
  concertId,
  ticketUrl,
  schedules,
  concertRequiredInfo,
  mds,
}: ConcertTabPanelProps) {
  const [showSnackBar, setShowSnackBar] = useState(false);

  // visibilitychange 기반 복귀 감지
  useEffect(() => {
    const handleVisibilityChange = () => {
      const ticketOpened = localStorage.getItem("ticketOpened");

      if (document.visibilityState === "visible" && ticketOpened === "true") {
        // 다음 복귀 감지를 위해 localStorage 초기화
        localStorage.removeItem("ticketOpened");

        setShowSnackBar(true); // 티켓 예매 페이지에서 복귀 시 SnackBar 표시
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleTicketClick = () => {
    window.open(ticketUrl, "_blank");
    // 티켓 웹사이트 버튼을 클릭하여 새 탭을 열었음을 기록
    localStorage.setItem("ticketOpened", "true");
  };

  return (
    <>
      {schedules && schedules.length > 0 && (
        <ScheduleInfo schedules={schedules} showReportButton={true} />
      )}

      <div className="mx-16 mt-10">
        {!showSnackBar && (
          <TicketWebsiteBtn ticketUrl={ticketUrl} onClick={handleTicketClick} />
        )}
      </div>

      {showSnackBar && (
        <div className="fixed bottom-16 left-[50vw] -translate-x-1/2 w-[88%] max-w-400 z-50">
          <ConcertSettingSnackBar
            id={concertId}
            onClose={() => setShowSnackBar(false)}
          />
        </div>
      )}

      {concertRequiredInfo && concertRequiredInfo.length > 0 && (
        <RequiredInfo
          concertRequiredInfo={concertRequiredInfo}
          ticketUrl={ticketUrl}
        />
      )}

      {mds && mds.length > 0 && (
        <MdInfo mds={mds} concertId={concertId} mdCount={mds.length} />
      )}
    </>
  );
}

export default ConcertTabPanel;
