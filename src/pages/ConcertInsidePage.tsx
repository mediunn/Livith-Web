import { useParams } from "react-router-dom";
import SearchBar from "../shared/ui/SearchBar";
import ConcertInsideInfo from "../features/concert/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";
import SetList from "../widgets/SetList";
import ExpectationSetList from "../shared/ui/ExpectationSetList";

function ConcertInsidePage() {
  const { concertId } = useParams<{ concertId: string }>();

  return (
    <>
      <SearchBar hideLogo></SearchBar>

      <ConcertInsideInfo concertId={Number(concertId)}></ConcertInsideInfo>
      <ConcertCulture></ConcertCulture>
      <ExpectationSetList></ExpectationSetList>
      <SetList></SetList>
    </>
  );
}

export default ConcertInsidePage;
