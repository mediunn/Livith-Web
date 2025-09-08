import { useState } from "react";
import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import SearchConcertList from "../widgets/SearchConcertList";
import TabBar, { TabType } from "../shared/ui/TabBar";
import { useTabDirection } from "../shared/hooks/useTabDirection";
import { motion, AnimatePresence } from "framer-motion";

function CategoryPage() {
  const { direction, currentTab, updateDirection } = useTabDirection();

  return (
    <div className="pb-120">
      <TopBar bgColor="bg-grayScaleBlack100" />

      <AnimatePresence mode="wait">
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
          <MainImageCarousel></MainImageCarousel>
          <SearchConcertList
            id={1}
            onClick={() => {
              window.amplitude.track("click_first_concert_cell");
            }}
          ></SearchConcertList>
          <SearchConcertList
            id={2}
            onClick={() => {
              window.amplitude.track("click_second_concert_cell");
            }}
          ></SearchConcertList>
        </motion.div>
      </AnimatePresence>

      <TabBar
        onTabChange={(tab) => {
          updateDirection(tab);
        }}
      ></TabBar>
    </div>
  );
}

export default CategoryPage;
