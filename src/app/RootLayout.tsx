import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative w-full max-w-md min-h-screen mx-auto bg-grayScaleBlack100">
      <Outlet />
    </div>
  );
};

export default RootLayout;
