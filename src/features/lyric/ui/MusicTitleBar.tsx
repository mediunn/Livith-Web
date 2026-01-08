import { useNavigate } from "react-router-dom";
import NavPrev from "../../../shared/assets/NavPrevIcon.svg";
import { useSong } from "../../../entities/lyric/model/useSong";
import SmallReportBtn from "../../../shared/ui/SmallReportBtn";

interface MusicTitleBarProps {
  songId: number;
}

function MusicTitleBar({ songId }: MusicTitleBarProps) {
  const handleClick = () => {
    window.amplitude.track("click_report_song");
    window.location.href = "https://forms.gle/aMj5C4LhDcMzueWz5";
  };

  const navigate = useNavigate();

  const { data: song } = useSong(songId);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-grayScaleBlack100 max-w-md w-full h-66">
      <div className="pt-20 px-16 flex justify-between items-end items-center">
        <div className="flex items-center flex-1 min-w-0">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => {
              // 이전 페이지가 없으면 홈으로 이동
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
          >
            <img src={NavPrev} className="w-full h-full" />
          </button>
          <p className="pl-4 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR line-clamp-1">
            {song?.title || ""}
          </p>
        </div>
        <SmallReportBtn
          onClick={handleClick}
          className="border border-solid border-grayScaleBlack80"
          label="정보 제보"
        />
      </div>
    </div>
  );
}

export default MusicTitleBar;
