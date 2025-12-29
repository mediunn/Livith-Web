import { useLocation, useNavigate } from "react-router-dom";
import CompleteEffect from "../shared/assets/CompleteEffect.svg";
import SetConcertCompleteMotion from "../shared/assets/SetConcertCompleteMotion.json";
import Lottie from "lottie-react";

function CompleteSetConcertPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const concert = location.state?.concert;

  if (!concert) return null;
  return (
    <>
      <div className="relative w-full h-[calc(100vh-76px)] max-w-md mx-auto overflow-hidden flex flex-col items-center justify-center">
        {/* 회전 효과 */}
        <Lottie
          animationData={SetConcertCompleteMotion}
          loop={true} // 무한 반복 여부
          autoplay={true} // 자동 재생 여부
          className="absolute w-1100 h-1100 z-0"
        />
        {/* 겹쳐진 이미지 래퍼 */}
        <div className="relative w-full aspect-[3/4]">
          {/* 회전 효과 이미지 */}
          {/* <img
            src={CompleteEffect}

            className="absolute inset-0 w-full h-full animate-spin-slow z-0"
          /> */}

          {/* 마스크 배경 이미지 */}
          <div
            className="absolute inset-0 z-10 w-[35%] h-[35%] top-1/4 left-1/3 animate-scale-in-out"
            style={{
              WebkitMaskImage: "url('/ConcertTicketMask.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('/ConcertTicketMask.svg')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
              backgroundImage: `url(${concert.poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* 그라데이션 오버레이 */}
          <div
            className="absolute inset-0 z-20 w-[35%] h-[35%] top-1/4 left-1/3 animate-scale-in-out bg-gradient-to-t from-gray-900/100 to-transparent pointer-events-none"
            style={{
              WebkitMaskImage: "url('/ConcertTicketMask.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('/ConcertTicketMask.svg')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
          />
          <div className="absolute top-[70%] w-full left-1/2 -translate-x-1/2 text-center text-white z-30 text-Head1-sm text-white font-semibold font-NotoSansKR">
            <span className="text-mainYellow30">[{concert.artist}]</span>{" "}
            콘서트가
            <br />
            관심 콘서트로 설정됐어요!
          </div>
        </div>
      </div>
      {/* <div className="fixed max-w-md bottom-60 w-full px-16"> */}
      <div className="sticky bottom-60 bg-grayScaleBlack100 pt-24 z-50  px-16 w-full  max-w-md">
        {/* 버튼 */}
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="w-full py-15 rounded-6 text-Body2-sm text-grayScaleBlack font-semibold bg-mainYellow30 font-NotoSansKR"
        >
          확인
        </button>
      </div>
    </>
  );
}
export default CompleteSetConcertPage;
