import { useRef, useState } from "react";
import InterestConcertListBar from "../features/interest/ui/InterestConcertListBar";
import InterestListSortMenu from "../features/interest/ui/InterestListSortMenu";
import { InterestSortFilter } from "../entities/concert/types";
import { AnimatePresence, motion } from "framer-motion";
import SortDownIcon from "../shared/assets/SortDown.svg";
import SortUpIcon from "../shared/assets/SortUp.svg";
import Filter from "../features/search/ui/Filter/Filter";
import { useRecommendConcertListSection } from "../features/concert/model/useRecommendConcertListSection";
import ConcertCard from "../entities/concert/ui/ConcertCard";
import { formatDateRange } from "../shared/utils/formatDateRange";
import { useNavigate } from "react-router-dom";

function InterestConcertListPage() {
  const [sort, setSort] = useState<InterestSortFilter>(
    InterestSortFilter.TICKET_DATE,
  );
  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  const { data: concerts = [] } = useRecommendConcertListSection(true); //추후 관심 콘서트로 변경 예정

  return (
    <div>
      <InterestConcertListBar />

      <div className="flex justify-end items-center pt-66 my-14 mr-15">
        <div ref={sortRef} className="relative flex">
          <Filter
            label={
              sort === InterestSortFilter.TICKET_DATE ? "예매일" : "공연 일정"
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
                <InterestListSortMenu sort={sort} setSort={setSort} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

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

export default InterestConcertListPage;
