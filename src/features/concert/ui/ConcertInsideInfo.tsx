import { useEffect, useState } from "react";
import { getConcertInsideInfo } from "../api/getConcertInsideInfo";
import { Concert, ConcertStatus } from "../../../entities/concert/types";

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

  const getStatusLabel = (status: ConcertStatus, daysLeft: number) => {
    switch (status) {
      case ConcertStatus.ONGOING:
        return "진행중";
      case ConcertStatus.COMPLETED:
        return "종료";
      case ConcertStatus.UPCOMING:
        return `d-${daysLeft}`;
      default:
        return "";
    }
  };

  return (
    <div className="w-full h-390">
      <img src={concert.poster} className="w-full h-full object-cover" />
      <div className="absolute top-240 left-16 mr-16">
        <div className="inline-flex items-center justify-center h-32 bg-grayScaleBlack90 rounded-24 px-13">
          <p className="text-grayScaleBlack30 text-caption-lg font-semibold font-NotoSansKR m-0">
            {getStatusLabel(concert.status, concert.daysLeft)}
          </p>
        </div>
        <p className=" my-20 text-grayScaleWhite text-head-lg font-semibold font-NotoSansKR">
          {concert.title}
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {concert.startDate}~{concert.endDate}
        </p>
        <p className="m-0 text-grayScaleWhite text-body-sm font-ragular font-NotoSansKR">
          {concert.artist}
        </p>
      </div>
    </div>
  );
}

export default ConcertInsideInfo;
