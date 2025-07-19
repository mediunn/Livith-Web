import SearchBar from "../shared/ui/SearchBar";
import ConcertSettingEmpty from "../features/concert/ui/ConcertSettingEmpty";
import ConcertSetting from "../features/concert/ui/ConcertSetting";
import TabBar from "../shared/ui/TabBar";

function HomePage() {
  return (
    <div className="pb-90">
      <SearchBar></SearchBar>
      {/* <ConcertSettingEmpty></ConcertSettingEmpty> */}
      <ConcertSetting></ConcertSetting>
      <TabBar></TabBar>
    </div>
  );
}

export default HomePage;
