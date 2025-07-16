import ConcertList from "../widgets/ConcertList";
import { ConcertStatus } from "../entities/concert/types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ListHeader from "../shared/ui/ListHeader";

function ConcertListPage() {
  const { status } = useParams();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concertStatus =
    status === ConcertStatus.COMPLETED
      ? "한 달 이내 진행했던 콘서트 목록"
      : status === ConcertStatus.ONGOING
        ? "현재 진행하는 콘서트 목록"
        : "곧 진행하는 콘서트 목록";
  return (
    <div>
      <ListHeader title={concertStatus} />
      <ConcertList status={status as ConcertStatus} />
    </div>
  );
}

export default ConcertListPage;
