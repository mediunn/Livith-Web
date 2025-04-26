import Layout from "../shared/ui/Layout";
import SearchBar from "../shared/ui/SearchBar";
import ConcertInsideInfo from "../shared/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";
import SetList from "../widgets/SetList";
import ExpectationSetList from "../shared/ui/ExpectationSetList";

function ConcertInsidePage() {
  return (
    <>
      <Layout>
        <SearchBar hideLogo></SearchBar>
        <ConcertInsideInfo></ConcertInsideInfo>
        <ConcertCulture></ConcertCulture>
        <ExpectationSetList></ExpectationSetList>
        <SetList></SetList>
      </Layout>
    </>
  );
}

export default ConcertInsidePage;
