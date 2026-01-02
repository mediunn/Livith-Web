interface SmallReportBtnProps {
  label: string;
  onClick: () => void;
  variant?: "not" | "my";
  className?: string;
}

function SmallReportBtn({
  label,
  onClick,
  variant = "not",
  className = "",
}: SmallReportBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        bg-grayScaleBlack100 rounded-24 px-12 py-4 text-Caption1-Bold font-bold font-NotoSansKR cursor-pointer
        ${variant === "my" ? "text-grayScaleBlack5 border border-grayScaleBlack80" : "text-grayScaleBlack80"}
        ${className}
      `}
    >
      {label}
    </button>
  );
}

export default SmallReportBtn;
