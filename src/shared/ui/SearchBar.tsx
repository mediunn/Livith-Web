import LogoIcon from "../assets/LogoIcon.svg";
import SearhIcon from "../assets/SearchIcon.svg";

function SerchBar() {
  return (
    <div className="flex item-center justify-between w-375 h-60">
      <img src={LogoIcon} alt="logo" className="pl-16 pt-20 w-101 h-25" />
      <img src={SearhIcon} alt="search" className="pr-16 pt-20 w-38 h-38" />
    </div>
  );
}

export default SerchBar;
