import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  if (isLoading) return null;
  if (isError) return null;

  const formatDate = (startDate: string, endDate: string) => {
    const end = endDate.split(".");
    if (startDate === endDate) {
      return `${startDate}`;
    }
    return `${startDate}~${end[1]}.${end[2]}`;
  };

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-24 px-16">
      {concerts?.map((concert) => {
        const isSelected = selectedConcert === concert.id;
        return (
          <motion.div
            key={concert.id}
            onClick={() =>
              setSelectedConcert(
                selectedConcert === concert.id ? null : concert.id
              )
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
          >
            <div className="cursor-pointer">
              <div className="w-full aspect-[108/158] relative">
                {concert.poster ? (
                  <img
                    src={concert.poster}
                    className={`w-full h-full rounded-6 object-cover ${
                      isSelected ? "border-2 border-mainYellow30" : ""
                    }`}
                  />
                ) : (
                  <div
                    className={`w-full bg-grayScaleBlack80 rounded-6 ${
                      isSelected ? "border-2 border-mainYellow30" : ""
                    }`}
                  />
                )}
                <div
                  className={`absolute top-10 left-10 px-13 py-8 inline-flex items-center justify-center h-32 rounded-24 ${
                    isSelected ? "bg-mainYellow30" : "bg-grayScaleBlack90"
                  }`}
                >
                  <p
                    className={`text-Caption1-Bold font-bold font-NotoSansKR ${
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
              <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 line-clamp-2">
                {concert.title}
              </p>
              <p className="text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
                {formatDate(concert.startDate, concert.endDate)}
              </p>
              {concert.artist && (
                <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR mt-4 mb-2 line-clamp-1">
                  {concert.artist}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}

      {isFetchingNextPage && <div>Loading more...</div>}

      {hasNextPage && <div ref={ref} className="h-10" />}
    </div>
  );
}
