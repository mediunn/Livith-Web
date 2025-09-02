import { toast } from "react-toastify";
import Lottie from "lottie-react";
import InterestConcertToastIconMotion from "../../shared/assets/InterestConcertToastIconMotion.json";

interface ConcertSettingSnackBarProps {
  id: string | number;
  onClose: () => void;
}

function ConcertSettingSnackBar({ id, onClose }: ConcertSettingSnackBarProps) {
  const STORAGE_KEY = "InterestConcertId";
  const handleChange = () => {
    localStorage.setItem(STORAGE_KEY, String(id));
    toast(
      <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
        <Lottie animationData={InterestConcertToastIconMotion} />
        <span>관심 공연을 변경했어요</span>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
      }
    );

    // 버튼 클릭 후 4초 뒤에 SnackBar 닫기
    setTimeout(() => {
      onClose();
    }, 4000);
  };

  return (
    <div className="flex justify-between items-start px-20 py-12 w-full bg-grayScaleBlack80 rounded-8">
      <div>
        <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          웹사이트를 보셨나요?
        </p>
        <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          관심 콘서트 설정하고 공연 알림을 받으세요
        </p>
      </div>
      <button
        onClick={handleChange}
        className="pt-4 text-mainYellow30 text-Caption1-sm font-semibold font-NotoSansKR"
      >
        콘서트 설정
      </button>
    </div>
  );
}

export default ConcertSettingSnackBar;
