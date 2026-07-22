import { useEffect, useState } from "react";
import TopBar from "../shared/ui/TopBar";
import InterestConcertTab from "../widgets/InterestConcertTab";
import TabBar from "../shared/ui/TabBar";
import { HomeTab } from "../widgets/HomeTab";
import CalendarTab from "../widgets/CalendarTab";
import InterestConcertAlarmBottomSheet from "../features/interest/ui/InterestConcertAlarmBottomSheet";
import { useEntryAlerts } from "../features/interest/model/useNotificationsEntryAlerts";
import { useRecoilValue } from "recoil";
import { userState } from "../shared/lib/recoil/atoms/userState";

function HomePage() {
  const [tab, setTab] = useState<"interest" | "calendar">("interest");

  const [isInterestConcertAlarmSheetOpen, setIsInterestConcertAlarmSheetOpen] =
    useState(true);

  const user = useRecoilValue(userState);
  const isLoggedIn = !!user;

  const { data: entryAlerts } = useEntryAlerts(isLoggedIn);

  const alerts = entryAlerts?.data.items ?? [];

  const autoRemovedAlerts = alerts.filter(
    (item) =>
      item.kind === "AUTO_REMOVED_COMPLETED" ||
      item.kind === "AUTO_REMOVED_CANCELED",
  );

  const requestAlerts = alerts.filter(
    (item) =>
      item.kind === "REQUEST_REGISTERED" || item.kind === "REQUEST_FAILED",
  );

  useEffect(() => {
    if (alerts.length > 0) {
      setIsInterestConcertAlarmSheetOpen(true);
    }
  }, [alerts.length]);

  return (
    <>
      <div className="pb-90">
        <TopBar bgColor="bg-grayScaleBlack100" />

        <HomeTab value={tab} onChange={setTab} />

        {tab === "interest" ? <InterestConcertTab /> : <CalendarTab />}

        <TabBar />
      </div>

      <InterestConcertAlarmBottomSheet
        isSheetOpen={isInterestConcertAlarmSheetOpen && alerts.length > 0}
        onSheetClose={() => setIsInterestConcertAlarmSheetOpen(false)}
        autoRemovedAlerts={autoRemovedAlerts}
        requestAlerts={requestAlerts}
      />
    </>
  );
}

export default HomePage;
