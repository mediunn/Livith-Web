interface DangerModalButtonProps {
  label: string;
  onClick: () => void;
  variant?: "white" | "black";
  disabled?: boolean;
}

export default function DangerModalButton({
  label,
  onClick,
  variant,
  disabled,
}: DangerModalButtonProps) {
  const styleClass =
    variant === "black"
      ? "bg-grayScaleBlack80 hover:bg-grayScaleBlack100 text-grayScaleWhite"
      : "bg-grayScaleBlack5 hover:bg-grayScaleBlack30 text-caution100";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex-1 ${styleClass} text-Body3-md font-medium font-NotoSansKR rounded-8 min-w-40`}
    >
      {label}
    </button>
  );
}
