interface SmallReportButtonProps {
  label: string;
  onClick: () => void;
  variant?: "not" | "my";
  className?: string;
}

function SmallReportButton({
  label,
  onClick,
  variant = "not",
  className = "",
}: SmallReportButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
         rounded-24 px-12 py-4 text-Caption1-Bold font-bold font-NotoSansKR border border-grayScaleBlack80 cursor-pointer
        ${variant === "my" ? "bg-grayScaleBlack100 text-grayScaleBlack5 " : "bg-grayScaleBlack100 text-grayScaleBlack80 hover:bg-grayScaleBlack80 hover:text-grayScaleBlack50"}
        ${className}
      `}
    >
      {label}
    </button>
  );
}

export default SmallReportButton;
