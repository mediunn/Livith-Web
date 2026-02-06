import CommonModal from "../../features/auth/ui/CommonModal/CommonModal";

interface AgreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "agree" | "reject";
}

function AgreeModal({ isOpen, onClose, type }: AgreeModalProps) {
  const isAgree = type === "agree";

  return (
    <CommonModal
      isOpen={isOpen}
      onClose={onClose}
      title={isAgree ? "알림 동의 안내" : "알림 거부 안내"}
      description={`전송자 : 라이빗
수신 일시 : 년도.월.일 hh:mm
처리 내용 : 알림 ${isAgree ? "동의" : "거부"} 처리 완료`}
      btnText="확인"
      btnVariant="primary"
    />
  );
}

export default AgreeModal;
