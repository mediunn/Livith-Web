import { useParams } from "react-router-dom";
import SetlistDetail from "../entities/setlist/ui/SetlistDetail";
import ListHeader from "../shared/ui/ListHeader";
import SetlistSongList from "../entities/setlist/ui/SetlistSongList";
import { useEffect } from "react";

function SetlistDetailPage() {
  const { setlistId, concertId } = useParams();
  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ListHeader />
      <SetlistDetail
        concertId={Number(concertId)}
        setlistId={Number(setlistId)}
      />
      <SetlistSongList setlistId={Number(setlistId)} />
    </div>
  );
}
export default SetlistDetailPage;
