import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ConcertInsidePage from "../pages/ConcertInsidePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "concert/:concertId",
    element: <ConcertInsidePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
