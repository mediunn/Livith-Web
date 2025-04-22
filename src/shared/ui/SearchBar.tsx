import LogoIcon from "../assets/LogoIcon.svg";
import SearhIcon from "../assets/SearchIcon.svg";

type SearchBarProps = {
  hideLogo?: boolean;
};

function SearchBar({ hideLogo = false }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between w-375 h-60">
      <img
        src={LogoIcon}
        alt="logo"
        className={`pl-16 pt-20 w-101 h-25 ${hideLogo ? "opacity-0" : "opacity-100"}`}
      />
      <button className="w-38 h-38 mt-20 mr-16 p-0 bg-transparent border-none cursor-pointer">
        <img src={SearhIcon} alt="search" className="w-full h-full" />
      </button>
    </div>
  );
}

export default SearchBar;
