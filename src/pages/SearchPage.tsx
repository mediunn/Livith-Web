import { useEffect, useRef, useState } from "react";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import RecentSearch from "../features/search/ui/RecentSearch";
import RecommendSearch from "../features/search/ui/RecommendSearch";
import SearchResult from "../features/search/ui/SearchResult";
import SearchResultCount from "../features/search/ui/SearchResultCount";

import {
  ConcertStatus,
  GenreFilter,
  SortFilter,
  StatusFilter,
} from "../entities/concert/types";
import FilterBottomSheet from "../features/search/ui/FilterBottomSheet";
import { FilterChips } from "../features/search/ui/FilterChips";
import { InfiniteConcertList } from "../widgets/InfiniteConcertList";
import ConcertList from "../widgets/ConcertList";
import FilterSearch from "../features/search/ui/FilterSearch";
function SearchPage() {
  const [input, setInput] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);
  // 검색 결과를 보여줄지 여부
  const [showResults, setShowResults] = useState(false);
  const STORAGE_KEY = "recentSearches";

  const [genre, setGenre] = useState<GenreFilter[]>([GenreFilter.ALL]);
  const [status, setStatus] = useState<StatusFilter[]>([StatusFilter.ALL]);
  const [sort, setSort] = useState<SortFilter>(SortFilter.LATEST);
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  // 처음 렌더링 시 localStorage에서 불러오기
  useEffect(() => {
    const recentSearch = localStorage.getItem(STORAGE_KEY);
    if (recentSearch) {
      setRecent(JSON.parse(recentSearch));
    }
  }, []);

  // 메뉴 wrapper ref
  const sortRef = useRef<HTMLDivElement>(null);

  // 메뉴 외부 클릭 감지
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortClicked(false);
      }
    }

    if (isSortClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortClicked]);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div className="pb-90 ">
      <div className="sticky top-0 z-50 bg-grayScaleBlack100">
        <InputSearchBar
          inputState={{ value: input, setValue: setInput }}
          recentState={{ value: recent, setValue: setRecent }}
          showResultsState={{ value: showResults, setValue: setShowResults }}
        />

        {/* 검색 결과 개수 표시 */}
        {showResults && input && (
          <></>
          // <div className="px-16 py-24 sticky top-[72px] bg-grayScaleBlack100 z-40">
          //   {/* height만큼 top 값을 줘야 아래에서 겹치지 않음 */}
          //   <SearchResultCount keyword={input} />
          // </div>
        )}
      </div>
      {/* 필터 영역 */}
      <FilterChips
        openSheet={openSheet}
        genreState={{ value: genre, setValue: setGenre }}
        statusState={{ value: status, setValue: setStatus }}
        sortState={{ value: sort, setValue: setSort }}
        isSortClickedState={{
          value: isSortClicked,
          setValue: setIsSortClicked,
        }}
        sortRef={sortRef}
      />
      {isSheetOpen && (
        <FilterBottomSheet
          genreState={{ value: genre, setValue: setGenre }}
          statusState={{ value: status, setValue: setStatus }}
          isSheetOpen={isSheetOpen}
          onSheetClose={closeSheet}
        />
      )}
      {showResults && input ? (
        <SearchResult keyword={input} />
      ) : (
        <>
          <FilterSearch
            keyword={input}
            genre={genre}
            status={status}
            sort={sort}
          />
          {/* 최근 검색어 */}
          {/* {!input && recent.length > 0 && (
            <RecentSearch
              inputState={{ value: input, setValue: setInput }}
              recentState={{ value: recent, setValue: setRecent }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )} */}
          {/* 추천 검색어 */}
          {/* {input.trim() && (
            <RecommendSearch
              inputState={{ value: input, setValue: setInput }}
              recentState={{ value: recent, setValue: setRecent }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )} */}
        </>
      )}
    </div>
  );
}
export default SearchPage;
