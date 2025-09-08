import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="relative w-full max-w-md min-h-screen mx-auto bg-grayScaleBlack100">
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </div>
  );
};

export default RootLayout;
