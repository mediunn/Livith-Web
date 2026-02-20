import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatAlarmDate } from "../utils/formatAlarmDate";

interface AlarmItemProps {
  id: number;
  type: string;
  title: string;
  content: string;
  targetId?: string;
  isRead: boolean;
  createdAt: string;
  updateRead: (id: number) => void;
}

function AlarmItem({
  id,
  type,
  title,
  content,
  targetId,
  isRead,
  createdAt,
  updateRead,
}: AlarmItemProps) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isRead) updateRead(id);

    if (type === "INTEREST_CONCERT") {
      navigate("/set-concert");
      return;
    }

    if (!targetId) return;

    let focusTarget:
      | "schedule"
      | "md"
      | "ticket"
      | "setlist"
      | "concertDetail"
      | null = null;

    switch (type) {
      case "CONCERT_INFO_UPDATE_SCHEDULE":
        focusTarget = "schedule";
        break;

      case "CONCERT_INFO_UPDATE_MD":
        focusTarget = "md";
        break;

      case "CONCERT_INFO_UPDATE_SETLIST":
        focusTarget = "setlist";
        break;

      case "CONCERT_INFO_UPDATE_TICKET":
        focusTarget = "ticket";
        break;

      case "TICKET_1D":
      case "TICKET_7D":
      case "TICKET_TODAY":
        focusTarget = "concertDetail";
        break;

      default:
        focusTarget = null;
    }

    navigate(`/concert/${targetId}`, {
      state: { focusTarget },
    });
  };

  return (
    <div
      className={`p-12 rounded-10 cursor-pointer ${
        hover ? "bg-grayScaleBlack90" : "bg-transparent"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <p
        className={`text-Body4-sm font-semibold font-NotoSansKR ${
          isRead ? "text-grayScaleBlack50" : "text-grayScaleWhite"
        }`}
      >
        {title}
      </p>
      <p
        className={`pt-4 pb-10 text-Caption1-re font-regular font-NotoSansKR ${
          isRead ? "text-grayScaleBlack50" : "text-grayScaleBlack30"
        }`}
      >
        {content}
      </p>
      <p
        className={`text-Caption2-sm font-semibold font-NotoSansKR ${
          isRead ? "text-grayScaleBlack50" : "text-grayScaleBlack30"
        }`}
      >
        {formatAlarmDate(createdAt)}
      </p>
    </div>
  );
}

export default AlarmItem;
