import CongratsIcon from "../../../shared/assets/CongratsIcon.svg";
import CommonModal from "./CommonModal/CommonModal";

interface SignupCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
}

function SignupCompleteModal({
  isOpen,
  onClose,
  nickname,
}: SignupCompleteModalProps) {
  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title={`${nickname}님, \n 라이빗에 어서오세요!`}
      description="라이빗과 즐거운 내한 공연을 준비해 볼까요?"
      icon={CongratsIcon}
      btnText="시작하기"
      btnVariant="primary"
    />
  );
}
export default SignupCompleteModal;
