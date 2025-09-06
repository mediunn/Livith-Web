import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.svg";
import HomeIconActive from "../assets/HomeIconActive.svg";
import CategoryIcon from "../assets/CategoryIcon.svg";
import CategoryIconActive from "../assets/CategoryIconActive.svg";
import MyIcon from "../assets/MyIcon.svg";
import MyIconActive from "../assets/MyIconActive.svg";

function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"home" | "category" | "my">(
    "home"
  );

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("home");
    } else if (location.pathname.startsWith("/category")) {
      setActiveTab("category");
    } else if (location.pathname.startsWith("/my")) {
      setActiveTab("my");
    }
  }, [location.pathname]);

  const getTextColor = (tab: "home" | "category" | "my") =>
    activeTab === tab ? "text-mainYellow30" : "text-[#737985]";

  return (
    <div className="fixed bottom-0 z-50 bg-grayScaleBlack100 max-w-md w-full h-90">
      <div className="w-full h-1 bg-grayScaleBlack80" />
      <div className="flex justify-between pt-12">
        <div className="flex flex-col items-center ml-57 ">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => {
              window.amplitude.track("click_nav_home");

              navigate("/");
            }}
          >
            <img
              src={activeTab === "home" ? HomeIconActive : HomeIcon}
              alt="home"
              className="w-full h-full"
            />
          </button>
          <p
            className={`${getTextColor("home")} text-Caption2-sm font-semibold font-NotoSansKR`}
          >
            홈
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => {
              window.amplitude.track("click_nav_explore");

              navigate("/category");
            }}
          >
            <img
              src={activeTab === "category" ? CategoryIconActive : CategoryIcon}
              alt="category"
              className="w-full h-full"
            />
          </button>
          <p
            className={`${getTextColor("category")} text-Caption2-sm font-semibold font-NotoSansKR`}
          >
            탐색
          </p>
        </div>
        <div className="flex flex-col items-center mr-58 ">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => {
              window.amplitude.track("click_nav_my");

              navigate("/my");
            }}
          >
            <img
              src={activeTab === "my" ? MyIconActive : MyIcon}
              alt="my"
              className="w-full h-full"
            />
          </button>
          <p
            className={`${getTextColor("my")} text-Caption2-sm font-semibold font-NotoSansKR`}
          >
            마이
          </p>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
