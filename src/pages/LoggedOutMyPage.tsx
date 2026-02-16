import LoginCalloutChip from "../features/auth/ui/LoginCalloutChip/LoginCalloutChip";
import KakaoLoginButton from "../features/auth/ui/KakaoLoginButton";
import LogoIcon from "../shared/assets/LogoIcon.svg";
import FeedbackIcon from "../shared/assets/FeedbackIcon.svg";
import AppleLoginButton from "../features/auth/ui/AppleLoginButton";
import TabBar from "../shared/ui/TabBar";

function LoggedOutMyPage() {
  const handleClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSe-d5MhQrwsRRrk9isYiYVw1afI7a60Xm0IHbxmmAHe8AUiMA/viewform";
  };

  const handleClickUpdate = () => {
    window.location.href =
      "https://www.notion.so/youz2me/Livith-v-25-11-18-1d402dd0e5fc800dab7fc177f325eade";
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
      <AppleLoginButton />
      {/* 정보 */}
      <div className="flex justify-center gap-18 text-grayScaleBlack30 text-Body4-re font-NotoSansKR font-regular mt-18 mb-27">
        <p>2.0.1</p>
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
        className="mx-16 my-30 cursor-pointer"
      />
      <TabBar />
    </div>
  );
}

export default LoggedOutMyPage;
