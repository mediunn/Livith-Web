import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import MdList from "../widgets/MdList";
import { getConcertInsideInfo } from "../entities/concert/api/getConcertInsideInfo";
import { Concert } from "../entities/concert/types";
import { motion } from "framer-motion";

function MdPage() {
  const location = useLocation();
  const concertId = location.state?.concertId;
  const [concert, setConcert] = useState<Concert | null>(null);

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchConcert() {
      try {
        const data = await getConcertInsideInfo(Number(concertId));
        setConcert(data);
      } catch (error) {
        console.error("특정 콘서트 상세 정보 조회 API 호출 실패", error);
      }
    }

    fetchConcert();
  }, [concertId]);

  if (!concert || !concert.ticketUrl) return null;

  return (
    <div className="pb-90">
      <ListHeader title={"MD 상세보기"} />
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
        <MdList concertId={concertId} ticketUrl={concert.ticketUrl} />
      </motion.div>
    </div>
  );
}

export default MdPage;
