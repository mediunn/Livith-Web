import { useState } from "react";
import TabContext from "@mui/lab/TabContext";
import { motion } from "framer-motion";
import { genreMap } from "../constants/filterMaps";
import styles from "./GenreTabs.module.css";

function GenreTabs() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const tabs = Object.entries(genreMap).map(([value, label]) => ({
    label,
    value,
  }));

  return (
    //좌우 스크롤 가능한 탭
    <div
      className={`w-full border-grayScale30 overflow-x-auto ${styles.scrollContainer}`}
    >
      <TabContext value={selectedTab}>
        <div className="flex">
          {tabs.map((tab) => (
            <div
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
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
