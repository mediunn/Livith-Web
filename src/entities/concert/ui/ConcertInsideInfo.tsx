import { Concert } from "../types";
import DetailInfo from "./DetailInfo";
import { formatDateRange } from "../../../shared/utils/formatDateRange";

interface ConcertInsideInfoProps {
  concert: Concert;
}

function ConcertInsideInfo({ concert }: ConcertInsideInfoProps) {
  return (
    <DetailInfo
      id={concert.id}
      imageUrl={concert.poster}
      artist={concert.artist}
      title={concert.title}
      date={formatDateRange(concert.startDate, concert.endDate)}
      venue={concert.venue}
      label={concert.label}
      status={concert.status}
    />
  );
}

export default ConcertInsideInfo;
