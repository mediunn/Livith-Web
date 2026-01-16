interface ChipFilterProps {
  onClick?: () => void;
  label: string;
  variant: "on" | "off";
}

export default function ChipFilter({
  onClick,
  label,
  variant,
}: ChipFilterProps) {
  const colorStyle =
    variant === "off"
      ? " bg-grayScaleBlack90 border-grayScaleBlack50 text-grayScaleBlack50"
      : " bg-mainYellow30 border-transparent text-grayScaleBlack100";
  return (
    <div
      onClick={onClick}
      className={`px-13 py-7 rounded-24 cursor-pointer font-bold font-NotoSansKR text-Caption1-Bold border ${colorStyle}`}
    >
      {label}
    </div>
  );
}
