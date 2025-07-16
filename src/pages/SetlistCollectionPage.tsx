import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SetlistType } from "../entities/setlist/types";
import ListHeader from "../shared/ui/ListHeader";
import SetlistCollection from "../entities/setlist/ui/SetlistCollection";

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
      <SetlistCollection
        type={type as SetlistType}
        concertId={Number(concertId)}
      />
    </div>
  );
}

export default SetlistCollectionPage;
