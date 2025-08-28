import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../entities/concert/ui/ConcertInsideInfo";
import ConcertInfoTab from "../entities/concert/ui/ConcertInfoTab";
import { getConcertInsideInfo } from "../entities/concert/api/getConcertInsideInfo";
import { Concert } from "../entities/concert/types";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const location = useLocation();
  const status = location.state?.status;

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

  if (!concert) return null;

  return (
    <div className="pb-90">
      <ListHeader title={concert.title} />
      <ConcertInsideInfo concert={concert}></ConcertInsideInfo>
      <ConcertInfoTab
        introduction={concert.introduction}
        concertId={Number(concertId)}
        ticketUrl={concert.ticketUrl}
      ></ConcertInfoTab>
    </div>
  );
}

export default ConcertInsidePage;
