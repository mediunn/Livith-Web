import { useEffect, useState } from "react";
import { getConcertInsideInfo } from "../api/getConcertInsideInfo";
import { Concert, ConcertFilter } from "../types";
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
        console.error("특정 콘서트 상세 조회 API 호출 실패", error);
      }
    }

    fetchConcert();
  }, [concertId]);

  if (!concert) return null;

  const getStatusLabel = (status: ConcertFilter, daysLeft: number) => {
    switch (status) {
      case ConcertFilter.NEW:
        return "진행중";
      case ConcertFilter.ALL:
        return "종료";
      case ConcertFilter.UPCOMING:
        return `D-${daysLeft}`;
      default:
        return "";
    }
  };

  return (
    <DetailInfo
      imageUrl={concert.poster}
      status={getStatusLabel(concert.status, concert.daysLeft)}
      title={concert.title}
      date={formatConcertDate(concert.startDate, concert.endDate)}
      artist={concert.artist}
    />
  );
}

export default ConcertInsideInfo;
