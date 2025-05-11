import { ReactNode } from "react";

interface LyricModalProps {
  children: ReactNode;
  onClose: () => void;
}

const LyricModal = ({ children, onClose }: LyricModalProps) => {
  return (
    <div
      className="fixed inset-0 z-0 flex items-center justify-center "
      onClick={onClose}
    >
      <div
        className=" flex items-center justify-center w-309 h-98 bg-[#222831]/90 backdrop-blur-sm rounded-6 shadow-[0_0_16.5px_rgba(255,255,151,0.5)]"
        onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫힘 방지
      >
        {children}
      </div>
    </div>
  );
};

export default LyricModal;
