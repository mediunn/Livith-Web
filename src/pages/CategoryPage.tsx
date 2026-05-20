import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SortFilter, StatusFilter } from "../entities/concert/types/index.ts";
import { GenreEnum } from "../entities/genre/types/index.ts";
import GenreTabs from "../entities/genre/ui/GenreTabs.tsx";
import FilteredConcertList from "../features/concert/ui/FilteredConcertList.tsx";
import FilterBottomSheet from "../features/search/ui/FilterBottomSheet.tsx";
import { FilterChips } from "../features/search/ui/FilterChips.tsx";
import SearchIcon from "../shared/assets/SearchIcon.tsx";
import TabBar from "../shared/ui/TabBar";
import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";

function CategoryPage() {
  const navigate = useNavigate();
  const [bgActive, setBgActive] = useState(false);
  const [selectedTab, setSelectedTab] = useState<GenreEnum>(GenreEnum.ALL);

  const [status, setStatus] = useState<StatusFilter[]>([StatusFilter.ALL]);
  const [sort, setSort] = useState<SortFilter>(SortFilter.LATEST);
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 365) {
        setBgActive(true);
      } else {
        setBgActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-120">
      <TopBar bgColor="bg-grayScaleBlack100" />
      <div
        onClick={() => {
          window.amplitude.track("click_search_bar");
        }}
        className={`sticky top-60 max-w-md w-full flex pt-13 pb-12 pl-16 pr-16 -mt-78 z-50 transition-colors duration-300 ${
          bgActive ? "bg-grayScaleBlack100" : "bg-transparent"
        }`}
      >
        <div className="flex items-center relative w-full ml-2 py-7 pl-16 rounded-10 bg-grayScaleBlack90">
          <input
            type="text"
            onFocus={() => navigate("/search")}
            placeholder="찾고 있는 콘서트나 가수를 검색하세요"
            className="w-full my-9 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR border-none outline-none bg-transparent placeholder-grayScaleBlack50"
          />
          <div className="mr-11">
            <SearchIcon color="#DBDCDF" />
          </div>
        </div>
      </div>

      <MainImageCarousel />
      <GenreTabs value={selectedTab} setValue={setSelectedTab} />
      {/* 필터 */}
      <FilterChips
        openSheet={openSheet}
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
          statusState={{ value: status, setValue: setStatus }}
          isSheetOpen={isSheetOpen}
          onSheetClose={closeSheet}
        />
      )}
      <div className="pt-12">
        <FilteredConcertList genre={selectedTab} status={status} sort={sort} />
      </div>
      <TabBar />
    </div>
  );
}

export default CategoryPage;
