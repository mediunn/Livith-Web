import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  Concert,
  ConcertFilter,
  ConcertStatus,
} from "../../../entities/concert/types";
import { setConcertStatus } from "../../../features/search/utils/setConcertStatus";
import { StateWithSetter } from "../../../shared/types/props";

type SelectableInfiniteConcertListProps = {
  concerts: Concert[] | undefined;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  selectedConcertState: StateWithSetter<string | null>;
};

export function SelectableInfiniteConcertList({
  concerts,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  selectedConcertState: {
    value: selectedConcert,
    setValue: setSelectedConcert,
  },
}: SelectableInfiniteConcertListProps) {
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
    <div className="grid grid-cols-3 gap-x-10 gap-y-24 px-16 min-h-[calc(100vh-72px)]">
      {concerts?.map((concert) => {
        const isSelected = selectedConcert === concert.id;
        return (
          <div
            onClick={() =>
              setSelectedConcert(
                selectedConcert === concert.id ? null : concert.id
              )
            }
            key={concert.id}
          >
            <div className="cursor-pointer">
              <div className="w-full aspect-[108/158] relative">
                {concert.poster ? (
                  <img
                    src={concert.poster}
                    alt="콘서트 이미지"
                    className={`w-full h-full rounded-6 object-cover ${isSelected ? "border-2 border-mainYellow30" : ""}`}
                  />
                ) : (
                  <div
                    className={`w-full bg-grayScaleBlack80 rounded-6 ${isSelected ? "border-2 border-mainYellow30" : ""}`}
                  />
                )}
                <div
                  className={`absolute top-10 left-10 inline-flex items-center justify-center h-32 rounded-24 px-13 ${isSelected ? "bg-mainYellow30" : "bg-grayScaleBlack90 "}`}
                >
                  <p
                    className={`text-caption-lg font-semibold font-NotoSansKR ${
                      isSelected
                        ? "text-grayScaleBlack100"
                        : "text-grayScaleBlack30"
                    }`}
                  >
                    {setConcertStatus({
                      status: concert.status,
                      daysLeft: concert.daysLeft,
                    })}
                  </p>
                </div>
              </div>
              <p className="text-grayScaleWhite text-body-md font-medium font-NotoSansKR mt-8 line-clamp-2">
                {concert.title}
              </p>
              <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mt-10 line-clamp-1">
                {formatDate(concert.startDate, concert.endDate)}
              </p>
              {concert.artist && (
                <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mt-4 mb-2 line-clamp-1">
                  {concert.artist}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {isFetchingNextPage && <div>Loading more...</div>}

      {hasNextPage && <div ref={ref} className="h-10" />}
    </div>
  );
}
