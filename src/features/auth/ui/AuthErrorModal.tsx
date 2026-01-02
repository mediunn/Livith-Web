import WarningTriangleIcon from "../../../shared/assets/WarningTriangleIcon.svg";
import CommonModal from "./CommonModal/CommonModal";

interface AuthErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

function AuthErrorModal({
  isOpen,
  onClose,
  title,
  description,
}: AuthErrorModalProps) {
  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      icon={WarningTriangleIcon}
      btnText="홈으로 돌아가기"
      btnVariant="pink"
    />
  );
}
export default AuthErrorModal;
