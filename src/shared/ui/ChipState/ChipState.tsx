interface ChipStateProps {
  label: string;
  variant?: "default" | "selected" | "keyword" | "dday";
  className?: string;
}

const VARIANT_STYLE = {
  default: {
    wrapper: "bg-grayScaleBlack90",
    text: "text-grayScaleBlack30",
  },
  selected: {
    wrapper: "bg-mainYellow30",
    text: "text-grayScaleBlack100",
  },
  keyword: {
    wrapper: "bg-grayScaleBlack80",
    text: "text-grayScaleBlack30",
  },
  dday: {
    wrapper: "bg-mainYellow30",
    text: "text-grayScaleBlack100",
  },
};

export default function ChipState({
  label,
  variant = "default",
  className = "",
}: ChipStateProps) {
  const style = VARIANT_STYLE[variant];

  return (
    <div
      className={`inline-flex items-center justify-center h-32 px-13 py-8 rounded-24 text-Caption1-Bold font-bold font-NotoSansKR ${style.wrapper} ${className}`}
    >
      <p className={style.text}>{label}</p>
    </div>
  );
}
