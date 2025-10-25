import LoginCalloutChip from "../features/auth/ui/LoginCalloutChip";
import KakaoLoginButton from "../features/auth/ui/KakaoLoginButton";
import LogoIcon from "../shared/assets/LogoIcon.svg";
import FeedbackIcon from "../shared/assets/FeedbackIcon.svg";

function LoggedOutMyPage() {
  const handleClick = () => {
    window.location.href = "https://forms.gle/q7uQEr4XSiQmoVkM6";
  };

  const handleClickUpdate = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc800dab7fc177f325eade?pvs=4";
  };
  const handleClickCondition = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc80eaacd9d3dfdc7d0aa0?pvs=4";
  };

  return (
    <div className="flex flex-col ">
      <img src={LogoIcon} className="h-52 my-115" />
      <LoginCalloutChip />
      <KakaoLoginButton />
      {/* 정보 */}
      <div className="flex justify-center gap-18 text-grayScaleBlack30 text-Body4-re font-NotoSansKR font-regular mt-18 mb-27">
        <p>1.1.1</p>
        <p className="underline cursor-pointer" onClick={handleClickUpdate}>
          업데이트 노트
        </p>
        <p className="underline cursor-pointer" onClick={handleClickCondition}>
          이용약관
        </p>
      </div>
      <div className="bg-[#29303C] h-5" />
      {/* 피드백 */}
      <img
        onClick={handleClick}
        src={FeedbackIcon}
        className="w-full h-full px-16 py-30"
      />
    </div>
  );
}

export default LoggedOutMyPage;
