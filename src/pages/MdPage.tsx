import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import MdList from "../widgets/MdList";

function MdPage() {
  const location = useLocation();
  const concertId = location.state?.concertId;

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-90">
      <ListHeader title={"MD 상세보기"} />
      <MdList concertId={concertId} />
    </div>
  );
}

export default MdPage;
