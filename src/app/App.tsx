import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";
import MyPage from "../pages/MyPage";
import ConcertListPage from "../pages/ConcertListPage";
import RootLayout from "./RootLayout";
import SearchPage from "../pages/SearchPage";
import LyricPage from "../pages/LyricPage";
import SetlistCollectionPage from "../pages/SetlistCollectionPage";

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
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
