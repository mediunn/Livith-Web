import { useEffect, useRef, useState } from "react";
import ScheduleInfo from "./ScheduleInfo";
import RequiredInfo from "./RequiredInfo";
import MdInfo from "./MdInfo";
import { Schedule } from "../api/getSchedule";
import { ConcertRequired } from "../api/getConcertRequiredInfo";
import { Md } from "../api/getMd";
import TicketWebsiteBtn from "./TicketWebsiteBtn";
import ConcertSettingSnackBar from "../../../features/interest/ui/ConcertSettingSnackBar";
import { ConcertStatus } from "../../../entities/concert/types";

interface ConcertTabPanelProps {
  concertId: number;
  ticketUrl: string;
  schedules: Schedule[] | null;
  concertRequiredInfo: ConcertRequired[] | null;
  mds: Md[] | null;
  status: string;
  focusTarget?:
    | "schedule"
    | "ticket"
    | "md"
    | "setlist"
    | "concertDetail"
    | null;
}

function ConcertTabPanel({
  concertId,
  ticketUrl,
  schedules,
  concertRequiredInfo,
  mds,
  status,
  focusTarget,
}: ConcertTabPanelProps) {
  const [showSnackBar, setShowSnackBar] = useState(false);

  const scheduleRef = useRef<HTMLDivElement>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const mdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusTarget) return;

    setTimeout(() => {
      if (focusTarget === "schedule") {
        scheduleRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (focusTarget === "ticket") {
        ticketRef.current?.scrollIntoView({ behavior: "smooth" });
      }

      if (focusTarget === "md") {
        mdRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [focusTarget]);

  // visibilitychange 기반 복귀 감지
  useEffect(() => {
    const handleVisibilityChange = () => {
      const ticketOpened = localStorage.getItem("ticketOpened");

      if (document.visibilityState === "visible" && ticketOpened === "true") {
        // 다음 복귀 감지를 위해 localStorage 초기화
        localStorage.removeItem("ticketOpened");

        if (status !== ConcertStatus.CANCELED) {
          setShowSnackBar(true); // 티켓 예매 페이지에서 복귀 시 SnackBar 표시
        }
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
        <div ref={scheduleRef}>
          <ScheduleInfo schedules={schedules} showReportButton={true} />
        </div>
      )}

      <div className="mx-16 mt-10">

        <TicketWebsiteBtn ticketUrl={ticketUrl} onClick={handleTicketClick} />

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
        <div ref={mdRef}>
          <MdInfo mds={mds} concertId={concertId} mdCount={mds.length} />
        </div>
      )}
    </>
  );
}

export default ConcertTabPanel;
