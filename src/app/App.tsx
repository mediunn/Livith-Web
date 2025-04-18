import Layout from "./Layout";
import SerchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/MainImageCarousel";
import TabBar from "../shared/ui/TabBar";

function App() {
  return (
    <>
      <Layout>
        <SerchBar></SerchBar>
        <MainImageCarousel></MainImageCarousel>
        <TabBar></TabBar>
      </Layout>
    </>
  );
}

export default App;
