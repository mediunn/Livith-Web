import { useRef, useCallback } from "react";
import { useState } from "react";
import InterestConcertListBar from "../features/interest/ui/InterestConcertListBar";
import InterestListSortMenu from "../features/interest/ui/InterestListSortMenu";
import { InterestSortFilter } from "../entities/concert/types";
import { AnimatePresence, motion } from "framer-motion";
import SortDownIcon from "../shared/assets/SortDown.svg";
import SortUpIcon from "../shared/assets/SortUp.svg";
import Filter from "../features/search/ui/Filter/Filter";
import ConcertCard from "../entities/concert/ui/ConcertCard";
import { useNavigate } from "react-router-dom";
import { useInterestConcerts } from "../features/interest/model/useInterestConcerts";

function InterestConcertListPage() {
  const [sort, setSort] = useState<InterestSortFilter>(
    InterestSortFilter.TICKETING,
  );
  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navigate = useNavigate();
  const {
    data: concerts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInterestConcerts({ sort });

  const bottomRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();
      if (!node) return;
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
      observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  // 이하 동일
  return (
    <div>
      <InterestConcertListBar />

      <div className="flex justify-end items-center pt-66 my-14 mr-15">
        <div ref={sortRef} className="relative flex">
          <Filter
            label={
              sort === InterestSortFilter.TICKETING ? "예매일" : "공연 일정"
            }
            icon={isSortClicked ? SortUpIcon : SortDownIcon}
            onClick={() => setIsSortClicked(!isSortClicked)}
          />

          <AnimatePresence>
            {isSortClicked && (
              <motion.div
                style={{ zIndex: 10 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full right-0"
              >
                <InterestListSortMenu
                  sort={sort}
                  setSort={(newSort) => {
                    setSort(newSort);
                    setIsSortClicked(false);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="pb-16 mx-16 grid grid-cols-3 gap-x-10 gap-y-24">
        {concerts?.map((concert) => (
          <div key={concert.id}>
            <ConcertCard
              imageUrl={concert.poster}
              title={concert.title}
              artist={concert.artist}
              startDate={concert.startDate}
              endDate={concert.endDate}
              status={concert.status}
              daysLeft={concert.daysLeft}
              onClick={() => navigate(`/concert/${concert.id}`)}
            />
          </div>
        ))}
      </div>

      {/* 무한스크롤 sentinel */}
      <div ref={bottomRef} className="h-1" />
      {isFetchingNextPage && (
        <div className="flex justify-center py-16">
          <span className="text-gray-400 text-sm">불러오는 중...</span>
        </div>
      )}
    </div>
  );
}

export default InterestConcertListPage;
