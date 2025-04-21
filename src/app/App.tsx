import Layout from "./Layout";
import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/MainImageCarousel";
import Concert from "../widgets/Concert";
import TabBar from "../shared/ui/TabBar";

function App() {
  return (
    <>
      <Layout>
        <SearchBar></SearchBar>
        <MainImageCarousel></MainImageCarousel>
        <Concert></Concert>
        <TabBar></TabBar>
      </Layout>
    </>
  );
}

export default App;
