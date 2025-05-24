import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon.svg";
import SearhIcon from "../assets/SearchIcon.svg";

type SearchBarProps = {
  hideLogo?: boolean;
};

function SearchBar({ hideLogo = false }: SearchBarProps) {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 z-50 bg-grayScaleBlack100 flex items-center justify-between w-full h-60">
      <img
        src={LogoIcon}
        alt="logo"
        className={`ml-16 w-101 h-25 ${hideLogo ? "opacity-0" : "opacity-100"}`}
      />
      <button
        className="w-38 h-38 mt-20 mr-16 mb-2 p-0 bg-transparent border-none cursor-pointer"
        onClick={() => navigate("/search")}
      >
        <img src={SearhIcon} alt="search" className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
