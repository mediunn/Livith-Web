import ConcertList from "../widgets/ConcertList";
import { ConcertFilter } from "../entities/concert/types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ListHeader from "../shared/ui/ListHeader";

function ConcertListPage() {
  const { status } = useParams();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concertFilter =
    status === ConcertFilter.ALL
      ? "전체 콘서트 목록"
      : status === ConcertFilter.NEW
        ? "최근 추가된 콘서트 목록"
        : "곧 진행하는 콘서트 목록";
  return (
    <div>
      <ListHeader title={concertFilter} />
      <ConcertList filter={status as ConcertFilter} />
    </div>
  );
}

export default ConcertListPage;
