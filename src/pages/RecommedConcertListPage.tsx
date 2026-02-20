import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ListHeader from "../shared/ui/ListHeader";
import { useRecommendConcertListSection } from "../features/concert/model/useRecommendConcertListSection";
import ConcertCard from "../entities/concert/ui/ConcertCard";
import { formatDateRange } from "../shared/utils/formatDateRange";

function RecommedConcertListPage() {
  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { data: concerts = [] } = useRecommendConcertListSection(true);

  return (
    <div>
      <ListHeader title="취향이 담긴 콘서트" />

      <div className="py-16 mx-16 grid grid-cols-3 gap-x-10 gap-y-24">
        {concerts?.map((concert) => (
          <div key={concert.id}>
            <ConcertCard
              imageUrl={concert.poster}
              title={concert.title}
              artist={concert.artist}
              date={formatDateRange(concert.startDate, concert.endDate)}
              status={concert.status}
              daysLeft={concert.daysLeft}
              onClick={() => navigate(`/concert/${concert.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommedConcertListPage;
