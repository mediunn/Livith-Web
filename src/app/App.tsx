import SerchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/MainImageCarousel";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <SerchBar></SerchBar>
        <MainImageCarousel></MainImageCarousel>
      </Layout>
    </>
  );
}

export default App;
