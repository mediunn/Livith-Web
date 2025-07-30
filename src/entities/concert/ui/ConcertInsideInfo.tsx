import { useEffect, useState } from "react";
import { getConcertInsideInfo } from "../api/getConcertInsideInfo";
import { Concert } from "../types";
import DetailInfo from "../../../shared/ui/DetailInfo";
import { formatConcertDate } from "../../../shared/utils/formatConcertDate";

interface Props {
  concertId: number;
}

function ConcertInsideInfo({ concertId }: Props) {
  const [concert, setConcert] = useState<Concert | null>(null);

  useEffect(() => {
    async function fetchConcert() {
      try {
        const data = await getConcertInsideInfo(concertId);
        setConcert(data);
      } catch (error) {
        console.error("특정 콘서트 상세 정보 조회 API 호출 실패", error);
      }
    }

    fetchConcert();
  }, [concertId]);

  if (!concert) return null;

  return (
    <DetailInfo
      imageUrl={concert.poster}
      artist={concert.artist}
      title={concert.title}
      date={formatConcertDate(concert.startDate, concert.endDate)}
      venue={concert.venue}
      ticketSite={concert.ticketSite}
      ticketUrl={concert.ticketUrl}
    />
  );
}

export default ConcertInsideInfo;
