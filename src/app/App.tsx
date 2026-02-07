import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";
import CategoryPage from "../pages/CategoryPage";
import MyPage from "../pages/MyPage";
import NicknamePage from "../pages/NicknamePage";
import ConcertListPage from "../pages/ConcertListPage";
import RootLayout from "./RootLayout";
import SearchPage from "../pages/SearchPage";
import LyricPage from "../pages/LyricPage";
import SetlistCollectionPage from "../pages/SetlistCollectionPage";
import SetlistDetailPage from "../pages/SetlistDetailPage";
import SetInterestConcertPage from "../pages/SetInterestConcertPage";
import MdPage from "../pages/MdPage";
import CompleteSetConcertPage from "../pages/CompleteSetConcertPage";
import WithdrawPage from "../pages/WithdrawPage";
import SignupAgreementPage from "../pages/SignupAgreementPage";
import SignupNicknamePage from "../pages/SignupNicknamePage";
import { InitializeAuthWrapper } from "../shared/components/InitializeAuthWrapper";
import CustomToastContainer from "../widgets/CustomToastContainer";
import { useEffect } from "react";
import SettingPage from "../pages/SettingPage";
import AlarmSettingPage from "../pages/AlarmSettingPage";
import SignupPreferGenrePage from "../pages/SignupPreferGenrePage";
import SignupPreferArtistPage from "../pages/SignupPreferArtistPage";
import SetPreferGenrePage from "../pages/SetPreferGenrePage";
import SetPreferArtistPage from "../pages/SetPreferArtistPage";
import AlarmListPage from "../pages/AlarmListPage";
import UpdatePreferGenrePage from "../pages/UpdatePreferGenrePage";
import UpdatePreferArtistPage from "../pages/UpdatePreferArtistPage";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 공통 레이아웃 적용
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "concert/:concertId",
        element: <ConcertInsidePage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
      {
        path: "setting",
        element: <SettingPage />,
      },
      {
        path: "alarm-setting",
        element: <AlarmSettingPage />,
      },

      {
        path: "alarm-list",
        element: <AlarmListPage />,
      },
      {
        path: "nickname",
        element: <NicknamePage />,
      },
      {
        path: "withdraw",
        element: <WithdrawPage />,
      },
      {
        path: "concerts/:status",
        element: <ConcertListPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "songs/:songId",
        element: <LyricPage />,
      },
      {
        path: "setlists/:type/:concertId",
        element: <SetlistCollectionPage />,
      },
      {
        path: "setlist/:setlistId/:concertId/:setlistTitle",
        element: <SetlistDetailPage />,
      },
      {
        path: "set-concert",
        element: <SetInterestConcertPage />,
      },
      {
        path: "md/:concertId",
        element: <MdPage />,
      },
      {
        path: "complete-set",
        element: <CompleteSetConcertPage />,
      },
      {
        path: "signup/agreement",
        element: <SignupAgreementPage />,
      },
      {
        path: "signup/nickname",
        element: <SignupNicknamePage />,
      },
      {
        path: "signup/prefer-genre",
        element: <SignupPreferGenrePage />,
      },
      {
        path: "signup/prefer-artist",
        element: <SignupPreferArtistPage />,
      },
      {
        path: "set-prefer-genre",
        element: <SetPreferGenrePage />,
      },
      {
        path: "set-prefer-artist",
        element: <SetPreferArtistPage />,
      },
      {
        path: "update-prefer-genre",
        element: <UpdatePreferGenrePage />,
      },
      {
        path: "update-prefer-artist",
        element: <UpdatePreferArtistPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        // bfcache로 복귀한 경우
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <RecoilRoot>
      <InitializeAuthWrapper>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <CustomToastContainer />
        </QueryClientProvider>
      </InitializeAuthWrapper>
    </RecoilRoot>
  );
}

export default App;
