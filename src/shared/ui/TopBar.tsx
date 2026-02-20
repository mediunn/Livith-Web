import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon.svg";
import AlarmIcon from "../assets/AlarmIcon.svg";
import NewAlarmIcon from "../assets/NewAlarmIcon.svg";
import { useUnreadCount } from "../../entities/notification/model/useUnreadCount";

interface TopBarProps {
  bgColor?: string;
}

function TopBar({ bgColor = "bg-transparent" }: TopBarProps) {
  const navigate = useNavigate();
  const { data: unreadCount, isLoading, isError } = useUnreadCount();

  return (
    <div
      className={`sticky top-0 z-50 px-16 flex items-center justify-between w-full h-60 ${bgColor}`}
    >
      <img src={LogoIcon} className={"w-101 h-25"} />
      <img
        src={unreadCount && unreadCount > 0 ? NewAlarmIcon : AlarmIcon}
        onClick={() => navigate("/alarm-list")}
        className={"w-38 h-38"}
      />
    </div>
  );
}

export default TopBar;
