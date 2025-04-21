import Layout from "./Layout";
import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/MainImageCarousel";
import CurrentConcert from "../widgets/CurrentConcert";
import NextConcert from "../widgets/NextConcert";
import PrevConcert from "../widgets/PrevConcert";
import TabBar from "../shared/ui/TabBar";

function App() {
  return (
    <>
      <Layout>
        <SearchBar></SearchBar>
        <MainImageCarousel></MainImageCarousel>
        <CurrentConcert></CurrentConcert>
        <NextConcert></NextConcert>
        <PrevConcert></PrevConcert>
        <TabBar></TabBar>
      </Layout>
    </>
  );
}

export default App;
