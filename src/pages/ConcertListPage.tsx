import ConcertList from "../widgets/ConcertList";
import { ConcertFilter } from "../entities/concert/types";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ListHeader from "../shared/ui/ListHeader";
import { motion } from "framer-motion";

function ConcertListPage() {
  const { status } = useParams();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concertFilter =
    status === ConcertFilter.ALL
      ? "전체 콘서트 목록"
      : status === ConcertFilter.NEW
        ? "최근 추가된 콘서트 목록"
        : "곧 진행하는 콘서트 목록";
  return (
    <div>
      <ListHeader title={concertFilter} />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{
          x: {
            type: "spring",
            stiffness: 756,
            damping: 48,
            mass: 1,
            duration: 0.25,
          },
          opacity: { duration: 0.1, ease: "easeOut" },
        }}
      >
        <ConcertList />
      </motion.div>
    </div>
  );
}

export default ConcertListPage;
