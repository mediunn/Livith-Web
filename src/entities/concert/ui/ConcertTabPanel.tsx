import { useEffect, useRef, useState } from "react";
import ScheduleInfo from "./ScheduleInfo";
import RequiredInfo from "./RequiredInfo";
import MdInfo from "./MdInfo";
import { Schedule } from "../api/getSchedule";
import { ConcertRequired } from "../api/getConcertRequiredInfo";
import { Md } from "../api/getMd";
import AGroupTicketWebsiteBtn from "../../../shared/ui/AGroupTicketWebsiteBtn";
import BGroupTicketWebsiteBtn from "../../../shared/ui/BGroupTicketWebsiteBtn";

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

  useEffect(() => {
    if (!bottomSensorRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingBtn(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(bottomSensorRef.current);

    return () => {
      if (bottomSensorRef.current) observer.unobserve(bottomSensorRef.current);
    };
  }, []);

  return (
    <>
      {schedules && schedules.length > 0 && (
        <ScheduleInfo schedules={schedules} showReportButton={true} />
      )}

      {/* BGroupTicketWebsiteBtn 노출 포인트 */}
      <div ref={bottomSensorRef} className="h-1 w-full"></div>

      <div className="mx-16 mt-10">
        {/* <AGroupTicketWebsiteBtn ticketUrl={ticketUrl} /> */}

        {showFloatingBtn && (
          <div className="fixed bottom-16 left-[50vw] -translate-x-1/2 w-[88%] max-w-400 z-50">
            <BGroupTicketWebsiteBtn ticketUrl={ticketUrl} />
          </div>
        )}
      </div>

      {concertRequiredInfo && concertRequiredInfo.length > 0 && (
        <RequiredInfo
          concertRequiredInfo={concertRequiredInfo}
          ticketUrl={ticketUrl}
        />
      )}

      {mds && mds.length > 0 && (
        <MdInfo
          mds={mds}
          concertId={concertId}
          mdCount={mds.length}
          ticketUrl={ticketUrl}
        />
      )}
    </>
  );
}

export default ConcertTabPanel;
