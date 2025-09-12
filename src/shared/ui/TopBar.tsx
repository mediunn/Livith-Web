import LogoIcon from "../assets/LogoIcon.svg";

interface TopBarProps {
  bgColor?: string;
}

function TopBar({ bgColor = "bg-transparent" }: TopBarProps) {
  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between w-full h-60 ${bgColor}`}
    >
      <img src={LogoIcon} className={"ml-16 w-101 h-25"} />
    </div>
  );
}

export default TopBar;
