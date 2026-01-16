import { AnimatePresence, motion } from "framer-motion";
import {
  genreMap,
  statusMap,
} from "../../../entities/concert/constants/filterMaps";
import {
  GenreFilter,
  SortFilter,
  StatusFilter,
} from "../../../entities/concert/types";
import CalendarIcon from "../../../shared/assets/CalendarIcon";
import MicIcon from "../../../shared/assets/MicIcon";
import SortDownIcon from "../../../shared/assets/SortDown.svg";
import SortUpIcon from "../../../shared/assets/SortUp.svg";
import { StateWithSetter } from "../../../shared/types/props";
import Dropdown from "./Dropdown/Dropdown";
import Filter from "./Filter/Filter";
import SortMenu from "./SortMenu";

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
          <Dropdown
            onClick={openSheet}
            variant="off"
            icon={<MicIcon />}
            label="전체장르"
          />
        ) : (
          <Dropdown
            onClick={openSheet}
            variant="on"
            icon={<MicIcon color="black" />}
            onRightIconClick={(e) => {
              e.stopPropagation(); // 부모 div의 onClick 실행 안 되게 막음
              setGenreSelected([GenreFilter.ALL]);
            }}
            label={
              genreSelected.length > 1
                ? `${genreMap[genreSelected[0]]}, ...`
                : genreMap[genreSelected[0]]
            }
          />
        )}
        {StatusFilter.ALL === statusSelected[0] ? (
          <Dropdown
            onClick={openSheet}
            variant="off"
            icon={<CalendarIcon />}
            label="전체기간"
          />
        ) : (
          <Dropdown
            onClick={openSheet}
            variant="on"
            icon={<CalendarIcon color="black" />}
            onRightIconClick={(e) => {
              e.stopPropagation(); // 부모 div의 onClick 실행 안 되게 막음
              setStatusSelected([StatusFilter.ALL]);
            }}
            label={
              statusSelected.length > 1
                ? `${statusMap[statusSelected[0]]}, ...`
                : statusMap[statusSelected[0]]
            }
          />
        )}
      </div>
      <div ref={sortRef} className="relative flex">
        <Filter
          label={sort === SortFilter.LATEST ? "최신순" : "가나다순"}
          icon={isSortClicked ? SortUpIcon : SortDownIcon}
          onClick={() => setIsSortClicked(!isSortClicked)}
        />
        <AnimatePresence>
          {isSortClicked && (
            <motion.div
              style={{ zIndex: 10 }}
              initial={{ opacity: 0, y: -20 }} // 위에서 시작
              animate={{ opacity: 1, y: 0 }} // 제자리로 내려옴
              exit={{ opacity: 0, y: -20 }} // 다시 위로 들어감
              transition={{ duration: 0.3, ease: "easeOut" }} // 0.3초 easy-out
              className="absolute top-full right-1"
            >
              <SortMenu sort={sort} setSort={setSort} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
