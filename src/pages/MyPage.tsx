import { useState } from "react";
import ReportConcert from "../features/my/ui/ReportConcert";
import TabBar, { TabType } from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";
import { motion, AnimatePresence } from "framer-motion";
import { useTabDirection } from "../shared/hooks/useTabDirection";

function MyPage() {
  const { direction, currentTab, updateDirection } = useTabDirection();

  return (
    <div className="pb-90">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={{
            opacity: 0, // fade in 시작
            x: 10 * direction, // move in 시작
          }}
          animate={{
            opacity: 1, // fade in 완료
            x: 0, // move in 완료
          }}
          exit={{
            opacity: 0, // fade out
            x: -10 * direction, // move out
          }}
          transition={{
            opacity: {
              duration: 0.1, // fade in/out 0.1초
              ease: "easeOut",
            },
            x: {
              duration: 0.15, // move in/out 0.15초
              ease: "easeOut",
            },
          }}
        >
          <ReportConcert></ReportConcert>
          <Info></Info>
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

export default MyPage;
