import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import SearchConcertList from "../widgets/SearchConcertList";
import TabBar from "../shared/ui/TabBar";

function CategoryPage() {
  return (
    <div className="pb-120">
      <TopBar bgColor="bg-grayScaleBlack100" />
      <MainImageCarousel></MainImageCarousel>
      <SearchConcertList id={1}></SearchConcertList>
      <SearchConcertList id={2}></SearchConcertList>
      <TabBar></TabBar>
    </div>
  );
}

export default CategoryPage;
