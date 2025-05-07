import React from "react";
import { ConcertStatus } from "../../../entities/concert/types";
import { useConcertList } from "../model/useConcertList";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import ConcertCard from "../../../widgets/ConcertCard";

type ConcertListProps = {
  status: ConcertStatus;
};
const ConcertList: React.FC<ConcertListProps> = ({ status }) => {
  const size = 15; // 페이지당 항목 수
  const navigate = useNavigate();
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertList({ status, size });

  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView: boolean) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const formatDate = (startDate: string, endDate: string) => {
    const end = endDate.split(".");
    if (startDate === endDate) {
      return `${startDate}`;
    }
    return `${startDate}~${end[1]}.${end[2]}`;
  };

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-24 mt-24 ml-16 mr-16">
      {data?.pages.map((concert, index) => (
        <div key={index}>
          <ConcertCard
            key={concert.id}
            imageUrl={concert.poster}
            title={concert.title}
            date={formatDate(concert.startDate, concert.endDate)}
            status={concert.status}
            onClick={() => {
              navigate(`/concert/${concert.id}`);
            }}
            artist={concert.artist}
            daysLeft={concert.daysLeft}
          />
        </div>
      ))}

      {/* 로딩 중 표시 */}
      {isFetchingNextPage && <div>Loading more...</div>}

      {hasNextPage && (
        <div ref={ref} className="text-center mt-4">
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ConcertList;
