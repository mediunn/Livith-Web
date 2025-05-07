import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../features/concert/ui/MainImageCarousel";
import CurrentConcert from "../widgets/CurrentConcert";
import NextConcert from "../widgets/NextConcert";
import PrevConcert from "../widgets/PrevConcert";
import TabBar from "../shared/ui/TabBar";

function HomePage() {
  return (
    <>
      <SearchBar></SearchBar>
      <MainImageCarousel></MainImageCarousel>
      <CurrentConcert></CurrentConcert>
      <NextConcert></NextConcert>
      <PrevConcert></PrevConcert>
      <TabBar></TabBar>
    </>
  );
}

export default HomePage;
