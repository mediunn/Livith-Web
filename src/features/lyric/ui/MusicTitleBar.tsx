import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSong } from "../api/getSong";
import NavPrev from "../../../shared/assets/NavPrevIcon.svg";

interface MusicTitleBarProps {
  songId: number;
}

function MusicTitleBar({ songId }: MusicTitleBarProps) {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetchTitle = async () => {
      try {
        const data = await getSong(songId);
        setTitle(data.title);
      } catch (error) {
        console.error("제목 조회 API 호출 실패:", error);
      }
    };

    fetchTitle();
  }, [songId]);

  return (
    <div className="sticky top-0 z-50 bg-grayScaleBlack100 max-w-md flex items-center w-full h-60">
      <button
        className="absolute left-0 ml-16 mt-20 w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={NavPrev} alt="prev" className="w-full h-full" />
      </button>
      <p className="mx-auto pt-20 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
        {title}
      </p>
    </div>
  );
}

export default MusicTitleBar;
