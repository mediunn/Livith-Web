import TabContext from "@mui/lab/TabContext";
import { motion } from "framer-motion";
import { genreMap } from "../constants/filterMaps";
import styles from "../../../shared/styles/scrollbar.module.css";
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
  const tabs = Object.entries(genreMap).map(([value, label]) => ({
    label,
    value: value as GenreEnum,
  }));

  const handleTabClick = (tabValue: GenreEnum) => {
    setSelectedTab(tabValue);
    window.amplitude.track(genreAmplitudeEventMap[tabValue]);
  };

  return (
    //좌우 스크롤 가능한 탭
    <div
      className={`w-full border-grayScale30 overflow-x-auto ${styles.hiddenScrollbar}`}
    >
      <TabContext value={selectedTab}>
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
      </TabContext>
    </div>
  );
}

export default GenreTabs;
