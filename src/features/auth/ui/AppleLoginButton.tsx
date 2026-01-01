import AppleIcon from "../../../shared/assets/AppleIcon.svg";
import SocialLoginButton from "./SocialLoginButton/SocialLoginButton";

interface AppleLoginButtonProps {
  onClickLogin?: () => void;
  group?: "A" | "B" | "C";
}

const AppleLoginButton = (props: AppleLoginButtonProps) => (
  <div className="mx-16 mb-12">
    <SocialLoginButton
      provider="apple"
      icon={AppleIcon}
      bgColor="bg-grayScaleBlack80"
      textColor="text-grayScaleBlack5"
      label="Apple로 계속하기"
      recentLoginLabel="Apple"
      {...props}
    />
  </div>
);

export default AppleLoginButton;
