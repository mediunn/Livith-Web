import { useParams } from "react-router-dom";
import SetlistDetail from "../features/setlist/ui/SetlistDetail";

function SetlistDetailPage() {
  const { setlistId, concertId } = useParams();
  return (
    <div>
      <h1>Setlist Detail Page</h1>
      <SetlistDetail
        concertId={Number(concertId)}
        setlistId={Number(setlistId)}
      />
      <p>Details about the setlist will be displayed here.</p>
    </div>
  );
}
export default SetlistDetailPage;
