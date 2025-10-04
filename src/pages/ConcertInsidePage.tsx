import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../entities/concert/ui/ConcertInsideInfo";
import ConcertInfoTab from "../entities/concert/ui/ConcertInfoTab";
import { useConcertInsideInfo } from "../entities/concert/model/useConcertInsideInfo";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: concert,
    isLoading,
    isError,
  } = useConcertInsideInfo(Number(concertId));

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
