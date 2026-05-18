import { Concert } from "../types";
import DetailInfo from "./DetailInfo";
import { formatDateRange } from "../../../shared/utils/formatDateRange";
import {
  getConcertDisplayTitle,
  getConcertDisplayVenue,
} from "../../../shared/utils/concertDisplay";

interface ConcertInsideInfoProps {
  concert: Concert;
}

function ConcertInsideInfo({ concert }: ConcertInsideInfoProps) {
  return (
    <DetailInfo
      id={concert.id}
      imageUrl={concert.poster}
      artist={concert.artist}
      title={getConcertDisplayTitle(concert)}
      date={formatDateRange(concert.startDate, concert.endDate)}
      venue={getConcertDisplayVenue(concert)}
      label={concert.label}
      status={concert.status}
    />
  );
}

export default ConcertInsideInfo;
