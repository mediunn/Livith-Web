import Lottie from "lottie-react";
import TopBar from "../../../shared/ui/TopBar";
import ConcertAddMotion from "../../../shared/assets/ConcertAddIconMotion.json";
import { useNavigate } from "react-router-dom";
import PopularConcert from "../../../widgets/PopularConcert";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../entities/recoil/atoms/userState";
import LoginModal from "../../../features/auth/ui/LoginModal";

function ConcertSettingEmpty() {
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //로그인 되어있는지 확인
  const user = useRecoilValue(userState);

  const handleSetInterestConcert = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    window.amplitude.track("click_interest_concert_main");
    navigate("/set-concert");
  };

  return (
    <>
      <TopBar bgColor="bg-grayScaleBlack90" />

      <div className="flex justify-between items-end bg-grayScaleBlack90 rounded-bl-20 px-16 pt-24 pb-30">
        <div>
          <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            반가워요!
            <br />
            기다리는
            <br />
            콘서트가 있나요?
          </p>
        </div>
        <button
          className="w-148 h-136 bg-grayScaleBlack80 rounded-10 border-none cursor-pointer"
          onClick={handleSetInterestConcert}
        >
          <div className="flex flex-col items-center">
            <Lottie
              animationData={ConcertAddMotion}
              loop={true}
              className="w-40 h-40"
            />
            <p className="mt-7 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
              관심 콘서트 설정
            </p>
          </div>
        </button>
      </div>
      <PopularConcert />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="interestConcert"
      />
    </>
  );
}

export default ConcertSettingEmpty;
