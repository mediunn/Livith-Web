import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";
import LyricPage from "../pages/LyricPage";
import MyPage from "../pages/MyPage";
import ConcertListPage from "../pages/ConcertListPage";
import RootLayout from "./RootLayout";

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
        path: "lyric",
        element: <LyricPage />,
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
