import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[375px] min-h-[812px] bg-grayScaleBlack100">
      {children}
    </div>
  );
};

export default Layout;
