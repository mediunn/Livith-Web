import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Concert } from "../../../entities/concert/types";
import { StateWithSetter } from "../../../shared/types/props";
import ChipState from "../../../shared/ui/ChipState/ChipState";
import EmptyConcertCard from "../../../shared/assets/EmptyConcertCardIcon.svg";
import {
  getConcertDisplayDate,
  getConcertDisplayStatus,
  getConcertDisplayTitle,
} from "../../../shared/utils/concertDisplay";
import type { SelectedConcert } from "../../../pages/SetInterestConcertPage";

type SelectableInfiniteConcertListProps = {
  concerts: Concert[] | undefined;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  selectedConcertsState: StateWithSetter<SelectedConcert[]>;
};

export function SelectableInfiniteConcertList({
  concerts,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  selectedConcertsState: {
    value: selectedConcerts,
    setValue: setSelectedConcerts,
  },
}: SelectableInfiniteConcertListProps) {
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
    <div className="grid grid-cols-3 gap-x-10 gap-y-24 px-16">
      {concerts?.map((concert) => {
        const isSelected = selectedConcerts.some((c) => c.id === concert.id);
        return (
          <motion.div
            key={concert.id}
            onClick={() =>
              setSelectedConcerts((prev) => {
                const exists = prev.some((c) => c.id === concert.id);
                return exists
                  ? prev.filter((c) => c.id !== concert.id)
                  : [
                      ...prev,
                      {
                        id: concert.id,
                        title: concert.title,
                        artist: concert.artist ?? "",
                      },
                    ];
              })
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
                      isSelected
                        ? "border-2 border-mainYellow30"
                        : "border-2 border-transparent"
                    }`}
                  />
                ) : (
                  <img
                    src={EmptyConcertCard}
                    className={`h-full w-full bg-grayScaleBlack80 rounded-6 ${
                      isSelected
                        ? "border-2 border-mainYellow30"
                        : "border-2 border-transparent"
                    }`}
                  />
                )}

                <ChipState
                  label={getConcertDisplayStatus(concert)}
                  variant={isSelected ? "selected" : "default"}
                  className="absolute top-10 left-10"
                />
              </div>
              <p className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR mt-8 line-clamp-2 break-words">
                {getConcertDisplayTitle(concert)}
              </p>
              <p className="text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR mt-10 line-clamp-1">
                {getConcertDisplayDate(concert)}
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
