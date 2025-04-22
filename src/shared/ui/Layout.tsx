import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-375 min-h-812 bg-grayScaleBlack100">
      {children}
    </div>
  );
};

export default Layout;
