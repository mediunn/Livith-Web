import { ReactNode } from "react";

interface HelpModalProps {
  children: ReactNode;
  onClose: () => void;
}

const HelpModal = ({ children, onClose }: HelpModalProps) => {
  return (
    <div className="fixed inset-0 z-10" onClick={onClose}>
      <div className="absolute top-127 right-16 w-214 h-186 bg-[#2F3745]/80 backdrop-blur-[6.3px] rounded-7 shadow-[0_0_16.3px_rgba(0,0,0,0.25)]">
        {children}
      </div>
    </div>
  );
};

export default HelpModal;
