import { useNavigate } from "react-router-dom";
import KakaoIcon from "../../../shared/assets/KakaoIcon.svg";
const KakaoLoginButton = () => {
  const navigate = useNavigate();
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const popupWidth = 400;
  const popupHeight = 600;
  const left = window.screenX + (window.innerWidth - popupWidth) / 2;
  const top = window.screenY + (window.innerHeight - popupHeight) / 2;
  const handleKakaoLogin = () => {
    const popup = window.open(
      `${SERVER_URL}/api/v4/auth/kakao/web`, // 서버 로그인 엔드포인트
      "kakaoLogin",
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=no`
    );

    const listener = (event: MessageEvent) => {
      if (event.origin !== SERVER_URL) return;

      // 서버에서 payload로 보낸 데이터
      const payload = event.data;
      localStorage.setItem("recentLogin", "카카오");
      //새 유저일 경우 회원가입 페이지로 이동
      if (payload.isNewUser) {
        navigate("/signup/agreement", {
          state: { tempUserData: payload.tempUserData },
        });
      }
      //기존 유저일 경우 액세스 토큰 저장 후 홈 화면으로 이동
      else {
        navigate("/");
        localStorage.setItem("accessToken", payload.accessToken);
      }

      // 팝업 닫기
      popup?.close();

      // 이벤트 리스너 제거
      window.removeEventListener("message", listener);
    };

    window.addEventListener("message", listener);
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="relative flex items-center justify-center mx-16 bg-[#FCE64A] h-52 rounded-6 mb-12"
    >
      <img src={KakaoIcon} className="absolute left-20" />
      <p className="text-grayScaleBlack100 text-Body3-md font-NotoSansKR font-medium">
        카카오로 계속하기
      </p>
    </button>
  );
};

export default KakaoLoginButton;
