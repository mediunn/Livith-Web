import SearchBar from "../shared/ui/SearchBar";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";

function HomePage() {
  return (
    <div className="pb-64">
      <SearchBar></SearchBar>
      <ConcertSetting></ConcertSetting>
      <TabBar></TabBar>
    </div>
  );
}

export default HomePage;
