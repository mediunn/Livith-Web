import HomeIcon from "../assets/HomeIcon.svg";
import MyIcon from "../assets/MyIcon.svg";

function TabBar() {
  return (
    <div className="absolute bottom-0 w-375 h-64 ">
      <div className="w-375 h-1 bg-grayScaleBlack80"></div>
      <div className="flex justify-between">
        <button className="w-38 h-38 mt-13 ml-92 p-0 bg-transparent border-none cursor-pointer">
          <img src={HomeIcon} alt="home" className="w-full h-full" />
        </button>
        <button className="w-38 h-38 mt-13 mr-92 p-0 bg-transparent border-none cursor-pointer">
          <img src={MyIcon} alt="my" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default TabBar;
