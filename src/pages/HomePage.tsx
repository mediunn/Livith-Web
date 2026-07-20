import { useState } from "react";
import TopBar from "../shared/ui/TopBar";
import InterestConcertTab from "../widgets/InterestConcertTab";
import TabBar from "../shared/ui/TabBar";
import { HomeTab } from "../widgets/HomeTab";
import CalendarTab from "../widgets/CalendarTab";

function HomePage() {
  const [tab, setTab] = useState<"interest" | "calendar">("interest");

  return (
    <div className="pb-90">
      <TopBar bgColor="bg-grayScaleBlack100" />

      <HomeTab value={tab} onChange={setTab} />

      {tab === "interest" ? <InterestConcertTab /> : <CalendarTab />}

      <TabBar />
    </div>
  );
}

export default HomePage;
