import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";
import CategoryPage from "../pages/CategoryPage";
import MyPage from "../pages/MyPage";
import ConcertListPage from "../pages/ConcertListPage";
import RootLayout from "./RootLayout";
import SearchPage from "../pages/SearchPage";
import LyricPage from "../pages/LyricPage";
import SetlistCollectionPage from "../pages/SetlistCollectionPage";
import SetlistDetailPage from "../pages/SetlistDetailPage";

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
        path: "setlist/:setlistId/:concertId",
        element: <SetlistDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
