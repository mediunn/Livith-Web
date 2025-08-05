import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import MdList from "../widgets/MdList";
import { getConcertInsideInfo } from "../entities/concert/api/getConcertInsideInfo";
import { Concert } from "../entities/concert/types";

function MdPage() {
  const location = useLocation();
  const concertId = location.state?.concertId;
  const [concert, setConcert] = useState<Concert | null>(null);

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchConcert() {
      try {
        const data = await getConcertInsideInfo(Number(concertId));
        setConcert(data);
      } catch (error) {
        console.error("특정 콘서트 상세 정보 조회 API 호출 실패", error);
      }
    }

    fetchConcert();
  }, [concertId]);

  if (!concert || !concert.ticketUrl) return null;

  return (
    <div className="pb-90">
      <ListHeader title={"MD 상세보기"} />
      <MdList concertId={concertId} ticketUrl={concert.ticketUrl} />
    </div>
  );
}

export default MdPage;
