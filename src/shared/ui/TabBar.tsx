import { useState } from "react";
import HomeIcon from "../assets/HomeIcon.svg";
import HomeIconActive from "../assets/HomeIconActive.svg";
import MyIcon from "../assets/MyIcon.svg";
import MyIconActive from "../assets/MyIconActive.svg";

function TabBar() {
  // 활성화된 탭 버튼
  const [activeTab, setActiveTab] = useState<"home" | "my">("home");

  return (
    <div className="absolute bottom-0 w-375 h-64">
      <div className="w-375 h-1 bg-grayScaleBlack80" />
      <div className="flex justify-between">
        <button
          className="w-38 h-38 mt-13 ml-92 p-0 bg-transparent border-none cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          <img
            src={activeTab === "home" ? HomeIconActive : HomeIcon}
            alt="home"
            className="w-full h-full"
          />
        </button>
        <button
          className="w-38 h-38 mt-13 mr-92 p-0 bg-transparent border-none cursor-pointer"
          onClick={() => setActiveTab("my")}
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
