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
        <ScheduleInfo schedules={schedules} />
      )}

      {concertRequiredInfo && concertRequiredInfo.length > 0 && (
        <RequiredInfo
          concertRequiredInfo={concertRequiredInfo}
          ticketUrl={ticketUrl}
        />
      )}

      {mds && <MdInfo mds={mds} concertId={concertId} mdCount={mds.length} />}
    </>
  );
}

export default ConcertTabPanel;
