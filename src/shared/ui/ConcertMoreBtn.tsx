interface ConcertMoreBtnProps {
  label: string;
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
  right?: number;
  top?: number;
  iconPosition: "left" | "right";
}

function ConcertMoreBtn({
  label,
  icon,
  onClick,
  disabled = false,
  right,
  top,
  iconPosition,
}: ConcertMoreBtnProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-${top} right-0 z-10  mt-16 mr-16 mr-${right} bg-grayScaleBlack100 rounded-8 backdrop-blur-sm
        shadow-[0_0_12px_rgba(255,255,255,0.3)] border-none cursor-pointer`}
    >
      <div className="px-12 py-8 flex items-center">
        {icon && iconPosition === "left" && (
          <img src={icon} className="w-24 h-24" />
        )}
        <p className="pl-4 pr-4 text-grayScaleWhite text-Caption1-sm font-semibold font-NotoSansKR">
          {label}
        </p>
        {icon && iconPosition === "right" && (
          <img src={icon} className="w-24 h-24" />
        )}
      </div>
    </button>
  );
}

export default ConcertMoreBtn;
