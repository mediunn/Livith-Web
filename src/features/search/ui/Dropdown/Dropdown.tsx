import CloseBlackIcon from "../../../../shared/assets/CloseBlackIcon.svg";
import FilterDownIcon from "../../../../shared/assets/FilterDownIcon.svg";
interface DropdownProps {
  onClick?: () => void;
  variant?: "on" | "off";
  icon?: React.ReactNode;
  label?: string;
  onRightIconClick?: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
}

export default function Dropdown({
  onClick,
  variant,
  icon,
  label,
  onRightIconClick,
}: DropdownProps) {
  const backgroundColor = variant === "on" ? "bg-mainYellow30" : "transparent";
  const borderColor =
    variant === "on" ? "border-transparent" : "border-grayScaleBlack50";
  const textColor =
    variant === "on" ? "text-grayScaleBlack100" : "text-grayScaleBlack30";
  const rightIcon =
    variant === "on" ? (
      <img src={CloseBlackIcon} onClick={onRightIconClick} />
    ) : (
      <img src={FilterDownIcon} />
    );
  return (
    <div
      onClick={onClick}
      className={`flex flex-row border ${borderColor} ${backgroundColor} rounded-24 px-8 py-5 space-x-4 cursor-pointer`}
    >
      {icon}
      <div
        className={`text-Body4-sm font-semibold ${textColor} font-NotoSansKR `}
      >
        {label}
      </div>
      {rightIcon}
    </div>
  );
}
