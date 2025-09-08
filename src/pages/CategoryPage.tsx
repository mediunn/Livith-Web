import { useEffect, useState } from "react";
import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import SearchConcertList from "../widgets/SearchConcertList";
import TabBar, { TabType } from "../shared/ui/TabBar";
import { useTabDirection } from "../shared/hooks/useTabDirection";
import { motion, AnimatePresence } from "framer-motion";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../shared/assets/SearchIcon.tsx";

function CategoryPage() {
  const { direction, currentTab, updateDirection } = useTabDirection();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 캐러셀 높이만큼 스크롤 내려가면 true
      const carouselHeight = 300; // MainImageCarousel 높이에 맞게 조정
      if (window.scrollY > carouselHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-120">
      <div
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-grayScaleBlack100" : "bg-transparent"
        }`}
      >
        <TopBar />
        <div className="max-w-md w-full flex pt-13 pb-12 pl-16 pr-16">
          <div className="flex items-center relative w-full ml-2 py-7 pl-16 bg-grayScaleBlack90 rounded-10">
            <input
              type="text"
              onFocus={() => {
                navigate("/search");
              }}
              placeholder="찾고 있는 콘서트나 가수를 검색하세요"
              className="w-full my-9 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR border-none outline-none bg-transparent placeholder-grayScaleBlack50"
            />
            <div className="mr-11">
              <SearchIcon color="#DBDCDF" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        key={currentTab}
        initial={{ opacity: 0, x: 10 * direction }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 * direction }}
        transition={{
          opacity: { duration: 0.1, ease: "easeOut" },
          x: { duration: 0.15, ease: "easeOut" },
        }}
      >
        <MainImageCarousel />
        <SearchConcertList
          id={1}
          onClick={() => {
            window.amplitude.track("click_first_concert_cell");
          }}
        />
        <SearchConcertList
          id={2}
          onClick={() => {
            window.amplitude.track("click_second_concert_cell");
          }}
        />
      </motion.div>

      <TabBar
        onTabChange={(tab) => {
          updateDirection(tab);
        }}
      />
    </div>
  );
}

export default CategoryPage;
