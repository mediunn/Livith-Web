import { Concert } from "../types";
import DetailInfo from "../../../shared/ui/DetailInfo";
import { formatConcertDate } from "../../../shared/utils/formatConcertDate";

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
      date={formatConcertDate(concert.startDate, concert.endDate)}
      venue={concert.venue}
      label={concert.label}
    />
  );
}

export default ConcertInsideInfo;
