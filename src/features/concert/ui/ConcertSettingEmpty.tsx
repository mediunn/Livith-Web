import Lottie from "lottie-react";
import TopBar from "../../../shared/ui/TopBar";
import ConcertAddMotion from "../../../shared/assets/ConcertAddIconMotion.json";
import { useNavigate } from "react-router-dom";
import PopularConcert from "../../../widgets/PopularConcert";

function ConcertSettingEmpty() {
  const navigate = useNavigate();

  const goToSetInterestConcertPage = () => {
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
          onClick={goToSetInterestConcertPage}
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
    </>
  );
}

export default ConcertSettingEmpty;
