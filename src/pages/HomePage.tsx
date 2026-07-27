import { useMemo, useState } from "react";
import TopBar from "../shared/ui/TopBar";
import InterestConcertTab from "../widgets/InterestConcertTab";
import TabBar from "../shared/ui/TabBar";
import { HomeTab } from "../widgets/HomeTab";
import CalendarTab from "../widgets/CalendarTab";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import CompleteToast from "../shared/ui/Toast/CompleteToast";
import ErrorToast from "../shared/ui/Toast/ErrorToast";
import InterestConcertAlarmBottomSheet from "../features/interest/ui/InterestConcertAlarmBottomSheet";
import { useEntryAlerts } from "../features/interest/model/useNotificationsEntryAlerts";

function HomePage() {
  const [tab, setTab] = useState<"interest" | "calendar">("interest");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { data } = useEntryAlerts(true);

  const items = data?.data.items ?? [];

  const autoRemovedAlerts = useMemo(
    () =>
      items.filter(
        (item) =>
          item.kind === "AUTO_REMOVED_COMPLETED" ||
          item.kind === "AUTO_REMOVED_CANCELED",
      ),
    [items],
  );

  const requestAlerts = useMemo(
    () =>
      items.filter(
        (item) =>
          item.kind === "REQUEST_REGISTERED" || item.kind === "REQUEST_FAILED",
      ),
    [items],
  );

  useEffect(() => {
    if (items.length > 0) {
      setIsSheetOpen(true);
    } else {
      setIsSheetOpen(false);
    }
  }, [items]);

  useEffect(() => {
    const state = location.state as
      | {
          showToast?: boolean;
          toastType?: "success" | "error";
          message?: string;
        }
      | undefined;

    if (!state?.showToast) return;

    toast.dismiss();

    if (state.toastType === "success") {
      toast(<CompleteToast message={state.message ?? ""} />, {
        toastId: "concert-request-success",
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }

    if (state.toastType === "error") {
      toast(<ErrorToast message={state.message ?? ""} />, {
        toastId: "concert-request-error",
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }

    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  }, [location.state]);

  return (
    <div className="pb-90">
      <TopBar bgColor="bg-grayScaleBlack100" />

      <HomeTab value={tab} onChange={setTab} />

      {tab === "interest" ? <InterestConcertTab /> : <CalendarTab />}

      <TabBar />

      <InterestConcertAlarmBottomSheet
        isSheetOpen={isSheetOpen}
        onSheetClose={() => setIsSheetOpen(false)}
        autoRemovedAlerts={autoRemovedAlerts}
        requestAlerts={requestAlerts}
      />
    </div>
  );
}

export default HomePage;
