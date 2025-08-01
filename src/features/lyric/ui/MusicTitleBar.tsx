import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSong } from "../../../entities/lyric/api/getSong";
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
    <div className="sticky top-0 z-50 bg-grayScaleBlack100 max-w-md w-full h-66">
      <div className="flex items-center pl-15 pt-20 pr-17">
        <button
          className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={NavPrev} alt="prev" className="w-full h-full" />
        </button>
        <p className="pl-4 text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR">
          {title}
        </p>
      </div>
    </div>
  );
}

export default MusicTitleBar;
