import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";
import LyricPage from "../pages/LyricPage";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "concert/:concertId",
    element: <ConcertInsidePage />,
  },

  {
    path: "lyric",
    element: <LyricPage />,
  },

  {
    path: "my",
    element: <MyPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
