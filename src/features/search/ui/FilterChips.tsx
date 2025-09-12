import {
  GenreFilter,
  SortFilter,
  StatusFilter,
} from "../../../entities/concert/types";
import SortDownIcon from "../../../shared/assets/SortDown.svg";
import SortUpIcon from "../../../shared/assets/SortUp.svg";
import MicIcon from "../../../shared/assets/MicIcon";
import FilterDownIcon from "../../../shared/assets/FilterDownIcon.svg";
import CalendarIcon from "../../../shared/assets/CalendarIcon";
import CloseBlackIcon from "../../../shared/assets/CloseBlackIcon.svg";
import SortMenu from "./SortMenu";
import { genreMap } from "../../../entities/concert/constants/filterMaps";
import { statusMap } from "../../../entities/concert/constants/filterMaps";
import { StateWithSetter } from "../../../shared/types/props";
import { motion, AnimatePresence } from "framer-motion";

interface FilterChipsProps {
  openSheet: () => void;
  genreState: StateWithSetter<GenreFilter[]>;
  statusState: StateWithSetter<StatusFilter[]>;
  sortState: StateWithSetter<SortFilter>;
  isSortClickedState: StateWithSetter<boolean>;
  sortRef: React.RefObject<HTMLDivElement | null>;
}

export function FilterChips({
  openSheet,
  genreState: { value: genreSelected, setValue: setGenreSelected },
  statusState: { value: statusSelected, setValue: setStatusSelected },
  sortState: { value: sort, setValue: setSort },
  isSortClickedState: { value: isSortClicked, setValue: setIsSortClicked },
  sortRef,
}: FilterChipsProps) {
  return (
    // {/* 필터 영역 */}
    <div className="flex flex-row m-16 justify-between items-center">
      <div className="flex flex-row space-x-8">
        {genreSelected[0] === GenreFilter.ALL ? (
          <div
            onClick={openSheet}
            className="flex flex-row border border-grayScaleBlack50 rounded-24 px-8 py-5 cursor-pointer items-center"
          >
            <MicIcon />
            <div className="text-Body4-md font-medium text-grayScaleBlack30 font-NotoSansKR ml-4">
              전체장르
            </div>
            <img src={FilterDownIcon} />
          </div>
        ) : (
          <div
            onClick={openSheet}
            className="flex flex-row bg-mainYellow30 rounded-24 px-8 py-5 items-center cursor-pointer"
          >
            <MicIcon color="black" />
            <div className="text-Body4-sm font-semibold text-grayScaleBlack100 font-NotoSansKR whitespace-nowrap ml-4">
              {genreSelected.length > 1
                ? `${genreMap[genreSelected[0]]}, ...`
                : genreMap[genreSelected[0]]}
            </div>
            <img
              src={CloseBlackIcon}
              onClick={(e) => {
                e.stopPropagation(); // 부모 div의 onClick 실행 안 되게 막음
                setGenreSelected([GenreFilter.ALL]);
              }}
            />
          </div>
        )}
        {StatusFilter.ALL === statusSelected[0] ? (
          <div
            onClick={openSheet}
            className="flex flex-row border border-grayScaleBlack50 rounded-24 px-8 py-5 space-x-4 mx-8 cursor-pointer"
          >
            <CalendarIcon />
            <div className="text-Body4-md font-medium text-grayScaleBlack30 font-NotoSansKR ">
              전체기간
            </div>
            <img src={FilterDownIcon} />
          </div>
        ) : (
          <div
            onClick={openSheet}
            className="flex flex-row bg-mainYellow30 rounded-24 px-8 py-5 items-center cursor-pointer"
          >
            <CalendarIcon color="black" />
            <div className="text-Body4-sm font-semibold text-grayScaleBlack100 font-NotoSansKR whitespace-nowrap ml-4">
              {statusSelected.length > 1
                ? `${statusMap[statusSelected[0]]}, ...`
                : statusMap[statusSelected[0]]}
            </div>
            <img
              src={CloseBlackIcon}
              onClick={(e) => {
                e.stopPropagation(); // 부모 div의 onClick 실행 안 되게 막음
                setStatusSelected([StatusFilter.ALL]);
              }}
            />
          </div>
        )}
      </div>
      <div
        className="relative flex flex-row"
        ref={sortRef}
        onClick={() => setIsSortClicked(!isSortClicked)}
      >
        <div className="text-grayScaleWhite text-Caption1-Bold font-bold font-NotoSansKR mr-4">
          {sort === SortFilter.LATEST ? "최신순" : "가나다순"}
        </div>
        <img
          src={isSortClicked ? SortUpIcon : SortDownIcon}
          className="cursor-pointer"
        />
        <AnimatePresence>
          {isSortClicked && (
            <motion.div
              style={{ zIndex: 10 }}
              initial={{ opacity: 0, y: -20 }} // 위에서 시작
              animate={{ opacity: 1, y: 0 }} // 제자리로 내려옴
              exit={{ opacity: 0, y: -20 }} // 다시 위로 들어감
              transition={{ duration: 0.3, ease: "easeOut" }} // 0.3초 easy-out
              className="absolute top-full right-1 top-1"
            >
              <SortMenu sort={sort} setSort={setSort} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
