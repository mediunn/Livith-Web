import { useState } from "react";
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

function HomePage() {
  const [tab, setTab] = useState<"interest" | "calendar">("interest");

  const location = useLocation();
  const navigate = useNavigate();

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
    </div>
  );
}

export default HomePage;
