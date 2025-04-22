import Layout from "../shared/ui/Layout";
import SearchBar from "../shared/ui/SearchBar";
import ConcertInsideInfo from "../shared/ui/ConcertInsideInfo";
import ConcertCulture from "../widgets/ConcertCulture";

function ConcertInsidePage() {
  return (
    <>
      <Layout>
        <SearchBar hideLogo></SearchBar>
        <ConcertInsideInfo></ConcertInsideInfo>
        <ConcertCulture></ConcertCulture>
      </Layout>
    </>
  );
}

export default ConcertInsidePage;
