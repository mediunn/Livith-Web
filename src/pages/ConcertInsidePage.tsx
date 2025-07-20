import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../entities/concert/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";
import PastSetList from "../widgets/PastSetList";
import ExpectationSetList from "../widgets/ExpectationSetList";
import { ConcertStatus } from "../entities/concert/types";
import OngoingSetList from "../widgets/OngoingSetList";
import ConcertInfoTab from "../entities/concert/ui/ConcertInfoTab";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const location = useLocation();
  const status = location.state?.status;

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div>
      <ListHeader title={"공연 상세정보"} />
      <ConcertInsideInfo concertId={Number(concertId)}></ConcertInsideInfo>
      <ConcertInfoTab></ConcertInfoTab>
    </div>
  );
}

export default ConcertInsidePage;

// function ConcertInsidePage() {
//   const { concertId } = useParams<{ concertId: string }>();
//   const location = useLocation();
//   const status = location.state?.status;

//   // 페이지 진입 시 스크롤 맨 위로 이동
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="pb-64">
//       <ListHeader></ListHeader>
//       <ConcertInsideInfo concertId={Number(concertId)}></ConcertInsideInfo>
//       <ConcertCulture></ConcertCulture>
//       {status === ConcertStatus.UPCOMING ? (
//         <>
//           <ExpectationSetList
//             concertId={Number(concertId)}
//           ></ExpectationSetList>
//           <PastSetList concertId={Number(concertId)}></PastSetList>
//         </>
//       ) : (
//         <OngoingSetList concertId={Number(concertId)}></OngoingSetList>
//       )}
//     </div>
//   );
// }

// export default ConcertInsidePage;
