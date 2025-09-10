import { useEffect, useState } from "react";
import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import SearchConcertList from "../widgets/SearchConcertList";
import TabBar from "../shared/ui/TabBar";
import { useTabDirection } from "../shared/hooks/useTabDirection";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../shared/assets/SearchIcon.tsx";

function CategoryPage() {
  const { updateDirection } = useTabDirection();
  const navigate = useNavigate();
  const [bgActive, setBgActive] = useState(false);

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
      <SearchConcertList
        id={1}
        onClick={() => window.amplitude.track("click_first_concert_cell")}
      />
      <SearchConcertList
        id={2}
        onClick={() => window.amplitude.track("click_second_concert_cell")}
      />

      <TabBar onTabChange={(tab) => updateDirection(tab)} />
    </div>
  );
}

export default CategoryPage;
