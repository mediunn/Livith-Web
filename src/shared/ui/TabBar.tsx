import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.svg";
import HomeIconActive from "../assets/HomeIconActive.svg";
import MyIcon from "../assets/MyIcon.svg";
import MyIconActive from "../assets/MyIconActive.svg";

function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"home" | "my">("home");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("home");
    } else if (location.pathname.startsWith("/my")) {
      setActiveTab("my");
    }
  }, [location.pathname]);

  return (
    <div className="fixed bottom-0 z-50 bg-grayScaleBlack100 max-w-md w-full h-64">
      <div className="w-full h-1 bg-grayScaleBlack80" />
      <div className="flex justify-between">
        <button
          className="w-38 h-38 mt-13 ml-92 p-0 bg-transparent border-none cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={activeTab === "home" ? HomeIconActive : HomeIcon}
            alt="home"
            className="w-full h-full"
          />
        </button>
        <button
          className="w-38 h-38 mt-13 mr-92 p-0 bg-transparent border-none cursor-pointer"
          onClick={() => {
            navigate("/my");
          }}
        >
          <img
            src={activeTab === "my" ? MyIconActive : MyIcon}
            alt="my"
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  );
}

export default TabBar;
