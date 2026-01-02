import KakaoIcon from "../../../shared/assets/KakaoIcon.svg";
import SocialLoginButton from "./SocialLoginButton/SocialLoginButton";

interface KakaoLoginButtonProps {
  onClickLogin?: () => void;
  group?: "A" | "B" | "C";
}
const KakaoLoginButton = (props: KakaoLoginButtonProps) => (
  <div className="mx-16 mb-12">
    <SocialLoginButton
      provider="kakao"
      icon={KakaoIcon}
      bgColor="bg-[#FCE64A]"
      textColor="text-grayScaleBlack100"
      label="카카오로 계속하기"
      recentLoginLabel="카카오"
      {...props}
    />
  </div>
);

export default KakaoLoginButton;
