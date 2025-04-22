import Layout from "../shared/ui/Layout";
import SearchBar from "../shared/ui/SearchBar";
import ConcertInsideInfo from "../shared/ui/ConcertInsideInfo";

function ConcertInsidePage() {
  return (
    <>
      <Layout>
        <SearchBar hideLogo></SearchBar>
        <ConcertInsideInfo></ConcertInsideInfo>
      </Layout>
    </>
  );
}

export default ConcertInsidePage;
