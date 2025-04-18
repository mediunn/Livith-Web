import HomeIcon from "../assets/HomeIcon.svg";
import MyIcon from "../assets/MyIcon.svg";

function TabBar() {
  return (
    <div className="absolute bottom-0 w-375 h-64 ">
      <div className="w-375 h-1 bg-grayScaleBlack80"></div>
      <div className="flex justify-between">
        <img src={HomeIcon} alt="home" className="pl-92 pt-13 w-38 h-38" />
        <img src={MyIcon} alt="my" className="pr-92 pt-13 w-38 h-38" />
      </div>
    </div>
  );
}

export default TabBar;
