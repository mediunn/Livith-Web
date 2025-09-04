import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import SearchConcertList from "../widgets/SearchConcertList";
import TabBar from "../shared/ui/TabBar";

function CategoryPage() {
  return (
    <div className="pb-120">
      <TopBar bgColor="bg-grayScaleBlack100" />
      <MainImageCarousel></MainImageCarousel>
      <SearchConcertList
        id={1}
        onClick={() => {
          window.amplitude.track("click_first_concert_cell");
        }}
      ></SearchConcertList>
      <SearchConcertList
        id={2}
        onClick={() => {
          window.amplitude.track("click_second_concert_cell");
        }}
      ></SearchConcertList>
      <TabBar></TabBar>
    </div>
  );
}

export default CategoryPage;
