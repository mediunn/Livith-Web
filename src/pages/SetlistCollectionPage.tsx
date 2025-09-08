import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SetlistType } from "../entities/setlist/types";
import ListHeader from "../shared/ui/ListHeader";
import SetlistCollection from "../entities/setlist/ui/SetlistCollection";
import { motion } from "framer-motion";

function SetlistCollectionPage() {
  const { type, concertId } = useParams();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setlistType =
    type === SetlistType.PAST ? "지난 셋리스트 목록" : "진행된 셋리스트 목록";

  return (
    <div>
      <ListHeader title={setlistType} />
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
        <SetlistCollection
          type={type as SetlistType}
          concertId={Number(concertId)}
        />
      </motion.div>
    </div>
  );
}

export default SetlistCollectionPage;
