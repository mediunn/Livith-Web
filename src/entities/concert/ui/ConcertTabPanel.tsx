import ScheduleInfo from "./ScheduleInfo";
import RequiredInfo from "./RequiredInfo";
import MdInfo from "./MdInfo";
import { Schedule } from "../api/getSchedule";
import { ConcertRequired } from "../api/getConcertRequiredInfo";
import { Md } from "../api/getMd";

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
  return (
    <>
      {schedules && schedules.length > 0 && (
        <ScheduleInfo
          schedules={schedules}
          showReportButton={true}
          ticketUrl={ticketUrl}
        />
      )}

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
