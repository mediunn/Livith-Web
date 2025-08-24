import TopBar from "../shared/ui/TopBar";
import MainImageCarousel from "../widgets/MainImageCarousel";
import NewConcert from "../widgets/NewConcert";
import UpcomingConcert from "../widgets/UpcomingConcert";
import AllConcert from "../widgets/AllConcert";
import TabBar from "../shared/ui/TabBar";

function CategoryPage() {
  return (
    <div className="pb-90">
      <TopBar bgColor="bg-grayScaleBlack100" />
      <MainImageCarousel></MainImageCarousel>
      <NewConcert></NewConcert>
      <UpcomingConcert></UpcomingConcert>
      <AllConcert></AllConcert>
      <TabBar></TabBar>
    </div>
  );
}

export default CategoryPage;
