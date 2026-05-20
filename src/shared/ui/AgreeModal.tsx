import { MarketingConsent } from "../../entities/notification/api/postMarketingConsent";
import CommonModal from "../../features/auth/ui/CommonModal/CommonModal";

interface AgreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "agree" | "reject";
  consentInfo: MarketingConsent | null;
}

function AgreeModal({ isOpen, onClose, type, consentInfo }: AgreeModalProps) {
  const isAgree = type === "agree";

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title={isAgree ? "알림 동의 안내" : "알림 거부 안내"}
      description={`전송자 : ${consentInfo?.sender}
수신 일시 : ${consentInfo?.agreedAt}
처리 내용 : ${isAgree ? "알림 동의 처리 완료" : "알림 거부 처리 완료"}`}
      btnText="확인"
      btnVariant="primary"
    />
  );
}

export default AgreeModal;
