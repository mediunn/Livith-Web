import Layout from "./Layout";
import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/MainImageCarousel";
import CurrentConcert from "../widgets/CurrentConcert";
import NextConcert from "../widgets/NextConcert";
import TabBar from "../shared/ui/TabBar";

function App() {
  return (
    <>
      <Layout>
        <SearchBar></SearchBar>
        <MainImageCarousel></MainImageCarousel>
        <CurrentConcert></CurrentConcert>
        <NextConcert></NextConcert>
        <TabBar></TabBar>
      </Layout>
    </>
  );
}

export default App;
