import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import CurrentConcert from "../widgets/CurrentConcert";
import NextConcert from "../widgets/NextConcert";
import PrevConcert from "../widgets/PrevConcert";
import TabBar from "../shared/ui/TabBar";

function HomePage() {
  return (
    <div className="pb-64">
      <SearchBar></SearchBar>
      <MainImageCarousel></MainImageCarousel>
      <CurrentConcert></CurrentConcert>
      <NextConcert></NextConcert>
      <PrevConcert></PrevConcert>
      <TabBar></TabBar>
    </div>
  );
}

export default HomePage;
