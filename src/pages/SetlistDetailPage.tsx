import { useLocation, useParams } from "react-router-dom";
import SetlistDetail from "../entities/setlist/ui/SetlistDetail";
import ListHeader from "../shared/ui/ListHeader";
import SetlistSongList from "../entities/setlist/ui/SetlistSongList";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SetlistDetailPage() {
  const { setlistId, concertId } = useParams();
  const location = useLocation();
  const setlistTitle = location.state.setlistTitle;
  const [setlistType, setSetlistType] = useState<string | null>(null);
  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ListHeader title={setlistTitle} />
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
        <SetlistDetail
          concertId={Number(concertId)}
          setlistId={Number(setlistId)}
          setSetlistType={setSetlistType}
        />
        <SetlistSongList
          setlistId={Number(setlistId)}
          setlistType={setlistType}
        />
      </motion.div>
    </div>
  );
}
export default SetlistDetailPage;
