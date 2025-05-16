import { useLocation, useParams } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ConcertInsideInfo from "../features/concert/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";
import PastSetList from "../shared/ui/PastSetList";
import ExpectationSetList from "../shared/ui/ExpectationSetList";
import { ConcertStatus } from "../entities/concert/types";
import OngoingSetList from "../shared/ui/OngoingSetlist";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();
  const location = useLocation();
  const status = location.state?.status;

  return (
    <>
      <ListHeader></ListHeader>
      <ConcertInsideInfo concertId={Number(concertId)}></ConcertInsideInfo>
      <ConcertCulture></ConcertCulture>
      {status === ConcertStatus.UPCOMING ? (
        <>
          <ExpectationSetList
            concertId={Number(concertId)}
          ></ExpectationSetList>
          <PastSetList></PastSetList>
        </>
      ) : (
        <OngoingSetList></OngoingSetList>
      )}
    </>
  );
}

export default ConcertInsidePage;
