import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../entities/concert/ui/ConcertInsideInfo";
import ConcertInfoTab from "../entities/concert/ui/ConcertInfoTab";
import { getConcertInsideInfo } from "../entities/concert/api/getConcertInsideInfo";
import { Concert } from "../entities/concert/types";
import { motion } from "framer-motion";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();

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

  if (!concert) return null;

  return (
    <div className="pb-90">
      <ListHeader title={concert.title} />
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
        <ConcertInsideInfo concert={concert}></ConcertInsideInfo>
        <ConcertInfoTab
          introduction={concert.introduction}
          concertId={Number(concertId)}
          ticketUrl={concert.ticketUrl}
        ></ConcertInfoTab>
      </motion.div>
    </div>
  );
}

export default ConcertInsidePage;
