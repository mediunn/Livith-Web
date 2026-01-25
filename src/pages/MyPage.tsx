import Nickname from "../features/my/ui/Nickname";
import TabBar from "../shared/ui/TabBar";
import { useNavigate } from "react-router-dom";
import LoggedOutMyPage from "./LoggedOutMyPage";
import { useRecoilValue } from "recoil";
import { userState } from "../shared/lib/recoil/atoms/userState";
import FeedbackIcon from "../shared/assets/FeedbackIcon.svg";
import SettingIcon from "../shared/assets/SettingIcon.svg";

function MyPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState); // 유저 정보 읽기
  const isLoggedIn = !!user; // 유저 정보가 있으면 로그인 상태
  if (user === undefined) return <div>로딩 중...</div>; // 초기화 대기

  const handleClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSe-d5MhQrwsRRrk9isYiYVw1afI7a60Xm0IHbxmmAHe8AUiMA/viewform";
  };

  return (
    <div className="pb-90">
      {isLoggedIn ? (
        <>
          <img
            src={SettingIcon}
            onClick={() => navigate("/setting")}
            className="absolute top-12 right-16 w-36 h-36 cursor-pointer"
          />
          <Nickname></Nickname>
          <img
            onClick={handleClick}
            src={FeedbackIcon}
            className="w-full h-full px-16 py-20 cursor-pointer"
          />
          <TabBar />
        </>
      ) : (
        <LoggedOutMyPage />
      )}
    </div>
  );
}

export default MyPage;
