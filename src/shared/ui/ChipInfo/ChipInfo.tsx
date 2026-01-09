interface ChipInfoProps {
  label: string;
  textStyle?: "caption1Bold" | "caption2Regular";
}

const TEXT_STYLE = {
  caption1Bold: "text-Caption1-Bold font-bold",
  caption2Regular: "text-Caption2-re font-regular",
};

export function ChipInfo({ label, textStyle = "caption1Bold" }: ChipInfoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-24 bg-grayScaleBlack100 `}
    >
      <p
        className={` ${TEXT_STYLE[textStyle]} px-8 py-4 text-grayScaleBlack50 font-NotoSansKR line-clamp-1`}
      >
        {label}
      </p>
    </div>
  );
}
