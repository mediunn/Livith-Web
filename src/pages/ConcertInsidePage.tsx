import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../features/concert/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";
import PastSetList from "../shared/ui/PastSetList";
import ExpectationSetList from "../shared/ui/ExpectationSetList";
import { ConcertStatus } from "../entities/concert/types";
import OngoingSetList from "../shared/ui/OngoingSetList";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const location = useLocation();
  const status = location.state?.status;

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-60 pb-64">
      <ListHeader></ListHeader>
      <ConcertInsideInfo concertId={Number(concertId)}></ConcertInsideInfo>
      <ConcertCulture></ConcertCulture>
      {status === ConcertStatus.UPCOMING ? (
        <>
          <ExpectationSetList
            concertId={Number(concertId)}
          ></ExpectationSetList>
          <PastSetList concertId={Number(concertId)}></PastSetList>
        </>
      ) : (
        <OngoingSetList concertId={Number(concertId)}></OngoingSetList>
      )}
    </div>
  );
}

export default ConcertInsidePage;
