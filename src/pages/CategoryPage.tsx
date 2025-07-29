import SearchBar from "../shared/ui/SearchBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import NewConcert from "../widgets/NewConcert";
import UpcomingConcert from "../widgets/UpcomingConcert";
import AllConcert from "../widgets/AllConcert";
import TabBar from "../shared/ui/TabBar";

function CategoryPage() {
  return (
    <div className="pb-90">
      <SearchBar></SearchBar>
      <MainImageCarousel></MainImageCarousel>
      <NewConcert></NewConcert>
      <UpcomingConcert></UpcomingConcert>
      <AllConcert></AllConcert>
      <TabBar></TabBar>
    </div>
  );
}

export default CategoryPage;
