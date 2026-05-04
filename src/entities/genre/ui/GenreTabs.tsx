import TabContext from "@mui/lab/TabContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { genreMap } from "../constants/filterMaps";
import styles from "../../../shared/styles/scrollbar.module.css";
import ConcertSlideNextArrow from "../../../shared/assets/ConcertSlideNextArrow.svg";
import ConcertSlidePrevArrow from "../../../shared/assets/ConcertSlidePrevArrow.svg";
import { StateWithSetter } from "../../../shared/types/props";
import { GenreEnum } from "../types";

const genreAmplitudeEventMap: Record<GenreEnum, string> = {
  [GenreEnum.ALL]: "click_genre_all",
  [GenreEnum.JPOP]: "click_genre_jpop",
  [GenreEnum.ROCK_METAL]: "click_genre_rock_metal",
  [GenreEnum.RAP_HIPHOP]: "click_genre_rap_hiphop",
  [GenreEnum.POP]: "click_genre_pop",
  [GenreEnum.INDIE]: "click_genre_indie",
};

function GenreTabs({
  value: selectedTab,
  setValue: setSelectedTab,
}: StateWithSetter<GenreEnum>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tabs = Object.entries(genreMap).map(([value, label]) => ({
    label,
    value: value as GenreEnum,
  }));

  const updateArrows = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 1);
  };

  useEffect(() => {
    updateArrows();
    const el = containerRef.current;
    if (!el) return;

    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    el.addEventListener("scroll", updateArrows);

    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("scroll", updateArrows);
    };
  }, []);

  const handleTabClick = (tabValue: GenreEnum) => {
    setSelectedTab(tabValue);
    window.amplitude.track(genreAmplitudeEventMap[tabValue]);
  };

  const scrollBy = (delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    //좌우 스크롤 가능한 탭
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showLeft && isHovered && (
        <button
          aria-label="genre-scroll-left"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scrollBy(-200)}
        >
          <img src={ConcertSlidePrevArrow} className="w-50 h-50" />
        </button>
      )}

      <TabContext value={selectedTab}>
        <div
          ref={containerRef}
          onMouseDown={(event) => event.preventDefault()}
          className={`w-full border-grayScale30 overflow-x-auto ${styles.hiddenScrollbar}`}
        >
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={`relative inline-flex shrink-0 whitespace-nowrap px-12 py-16 text-Body2-sm font-semibold font-NotoSansKR cursor-pointer ${
                  tab.value === selectedTab
                    ? "text-grayScaleWhite"
                    : "text-grayScaleBlack50"
                }`}
              >
                {tab.label}
                {tab.value === selectedTab && (
                  <motion.div
                    layoutId="genre-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-2 bg-grayScaleWhite"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </TabContext>

      {showRight && isHovered && (
        <button
          aria-label="genre-scroll-right"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scrollBy(200)}
        >
          <img src={ConcertSlideNextArrow} className="w-50 h-50" />
        </button>
      )}
    </div>
  );
}

export default GenreTabs;
