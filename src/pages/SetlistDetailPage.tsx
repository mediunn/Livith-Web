import { useParams } from "react-router-dom";
import SetlistDetail from "../features/setlist/ui/SetlistDetail";
import ListHeader from "../shared/ui/ListHeader";
import SetlistSongList from "../features/setlist/ui/SetlistSongList";

function SetlistDetailPage() {
  const { setlistId, concertId } = useParams();
  return (
    <>
      <ListHeader />
      <SetlistDetail
        concertId={Number(concertId)}
        setlistId={Number(setlistId)}
      />
      <SetlistSongList />
    </>
  );
}
export default SetlistDetailPage;
