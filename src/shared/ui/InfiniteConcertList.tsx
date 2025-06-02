import { useInView } from "react-intersection-observer";
import ConcertCard from "../../widgets/ConcertCard";
import { Concert } from "../../entities/concert/types";
import { useNavigate } from "react-router-dom";

type InfiniteConcertListProps = {
  concerts: Concert[] | undefined;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  isLoading?: boolean;
  isError?: boolean;
};

export function InfiniteConcertList({
  concerts,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
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
    <div className="grid grid-cols-3 gap-x-10 gap-y-24 mx-16">
      {concerts?.map((concert) => (
        <div key={concert.id}>
          <ConcertCard
            imageUrl={concert.poster}
            title={concert.title}
            date={formatDate(concert.startDate, concert.endDate)}
            status={concert.status}
            onClick={() => {
              navigate(`/concert/${concert.id}`, {
                state: { status: concert.status },
              });
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
