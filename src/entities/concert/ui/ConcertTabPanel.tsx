import { useEffect, useRef, useState } from "react";
import ScheduleInfo from "./ScheduleInfo";
import RequiredInfo from "./RequiredInfo";
import MdInfo from "./MdInfo";
import { Schedule } from "../api/getSchedule";
import { ConcertRequired } from "../api/getConcertRequiredInfo";
import { Md } from "../api/getMd";
import AGroupTicketWebsiteBtn from "../../../shared/ui/AGroupTicketWebsiteBtn";
import BGroupTicketWebsiteBtn from "../../../shared/ui/BGroupTicketWebsiteBtn";

import { analytics } from "../../../app/firebase";
import { logEvent } from "firebase/analytics";
import ConcertSettingSnackBar from "../../../shared/ui/ConcertSettingSnackBar";

// A/B 테스트 그룹 배정 유틸
function getExperimentGroup(): "A" | "B" {
  let group = localStorage.getItem("ticketBtnGroup") as "A" | "B" | null;
  if (!group) {
    group = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("ticketBtnGroup", group);
  }
  return group;
}

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
  const bottomSensorRef = useRef<HTMLDivElement | null>(null);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [group, setGroup] = useState<"A" | "B">("A");
  const [showSnackBar, setShowSnackBar] = useState(false);

  // 최초 그룹 배정만 수행
  useEffect(() => {
    const assignedGroup = getExperimentGroup();
    setGroup(assignedGroup);
  }, []);

  // visibilitychange 기반 복귀 감지
  useEffect(() => {
    const handleVisibilityChange = () => {
      const ticketOpened = localStorage.getItem("ticketOpened");
      //ticketOpened === "true"으로 새 탭이 열렸을 경우에만 page_view_returned 이벤트 기록
      if (document.visibilityState === "visible" && ticketOpened === "true") {
        logEvent(analytics, "page_view_returned", { group, debug_mode: true });
        // page_view_returned 이벤트 기록 후 다음 복귀 감지를 위해 localStorage 초기화
        localStorage.removeItem("ticketOpened");

        setShowSnackBar(true); // 복귀 시 SnackBar 표시
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [group]);

  // BGroupTicketWebsiteBtn 플로팅 버튼 표시
  useEffect(() => {
    if (!bottomSensorRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingBtn(entry.isIntersecting),
      { root: null, threshold: 0 }
    );

    observer.observe(bottomSensorRef.current);
    return () => {
      if (bottomSensorRef.current) observer.unobserve(bottomSensorRef.current);
    };
  }, []);

  const handleTicketClick = () => {
    window.open(ticketUrl, "_blank");
    // 티켓 웹사이트 버튼을 클릭하여 새 탭을 열었음을 기록
    localStorage.setItem("ticketOpened", "true");
    logEvent(analytics, "ticket_button_click", { group, debug_mode: true });
  };

  return (
    <>
      {schedules && schedules.length > 0 && (
        <ScheduleInfo schedules={schedules} showReportButton={true} />
      )}

      {/* BGroupTicketWebsiteBtn 노출 포인트 */}
      <div ref={bottomSensorRef} className="h-1 w-full"></div>

      <div className="mx-16 mt-10">
        {!showSnackBar && (
          <>
            {group === "A" ? (
              <AGroupTicketWebsiteBtn
                ticketUrl={ticketUrl}
                onClick={handleTicketClick}
                group={group}
              />
            ) : (
              showFloatingBtn && (
                <div className="fixed bottom-16 left-[50vw] -translate-x-1/2 w-[88%] max-w-400 z-50">
                  <BGroupTicketWebsiteBtn
                    ticketUrl={ticketUrl}
                    onClick={handleTicketClick}
                    group={group}
                  />
                </div>
              )
            )}
          </>
        )}
      </div>

      {showSnackBar && (
        <div className="fixed bottom-16 left-[50vw] -translate-x-1/2 w-[88%] max-w-400 z-50">
          <ConcertSettingSnackBar
            id={concertId}
            onClose={() => setShowSnackBar(false)}
            group={group}
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
