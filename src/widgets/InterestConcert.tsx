import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InterestConcertCarousel from "../features/interest/ui/InterestConcertCarousel";
import ConcertListSectionArrowIcon from "../shared/assets/ConcertListSectionArrowIcon.svg";
import InterestSortDownIcon from "../shared/assets/InterestSortDownIcon.svg";
import InterestSortUpIcon from "../shared/assets/InterestSortUpIcon.svg";
import Filter from "../features/search/ui/Filter/Filter";
import InterestSortMenu from "../features/interest/ui/InterestSortMenu";
import { InterestSortFilter } from "../entities/concert/types";

function InterestConcert() {
  const [sort, setSort] = useState<InterestSortFilter>(
    InterestSortFilter.TICKET_DATE,
  );
  const [isSortClicked, setIsSortClicked] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mt-16 mx-12 mb-30">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div ref={sortRef} className="relative flex">
            <Filter
              label={
                sort === InterestSortFilter.TICKET_DATE ? "예매일" : "공연 일정"
              }
              icon={isSortClicked ? InterestSortUpIcon : InterestSortDownIcon}
              onClick={() => setIsSortClicked(!isSortClicked)}
              className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR"
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
                  <InterestSortMenu sort={sort} setSort={setSort} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            이 가까운
          </p>
        </div>
        <button className="p-8 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR cursor-pointer">
          변경하기
        </button>
      </div>
      <div className="mb-20 flex items-center mt-4">
        <p className="mr-4 text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
          관심콘서트
        </p>
        <img
          src={ConcertListSectionArrowIcon}
          className="w-24 h-24 cursor-pointer"
        />
      </div>
      <InterestConcertCarousel />
    </div>
  );
}

export default InterestConcert;
