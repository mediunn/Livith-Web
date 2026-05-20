import { useInView } from "react-intersection-observer";
import ConcertCard from "../entities/concert/ui/ConcertCard";
import { Concert } from "../entities/concert/types";
import { useNavigate } from "react-router-dom";

type InfiniteConcertListProps = {
  concerts: Concert[] | undefined;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  isSearch?: boolean;
};

export function InfiniteConcertList({
  concerts,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  isSearch,
}: InfiniteConcertListProps) {
  const navigate = useNavigate();
  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage && fetchNextPage) {
        fetchNextPage();
      }
    },
  });
  if (isLoading) return null;
  if (isError) return null;

  return (
    <div className="py-18 mx-16 grid grid-cols-3 gap-x-10 gap-y-24">
      {concerts?.map((concert) => (
        <div key={concert.id}>
          <ConcertCard
            imageUrl={concert.poster}
            title={concert.title}
            startDate={concert.startDate}
            endDate={concert.endDate}
            status={concert.status}
            onClick={() => {
              navigate(`/concert/${concert.id}`, {
                state: { status: concert.status },
              });
              if (isSearch) {
                // 검색 결과에서 클릭된 경우
                window.amplitude.track("click_search_cell");
              }
            }}
            artist={concert.artist}
            daysLeft={concert.daysLeft}
          />
        </div>
      ))}

      {isFetchingNextPage && <div>Loading more...</div>}

      {hasNextPage && <div ref={ref} className="h-10" />}
    </div>
  );
}
