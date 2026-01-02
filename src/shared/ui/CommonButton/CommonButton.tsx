type CommonButtonProps = {
  variant: "primary" | "pink";
  isActive: boolean;
  title: string;
  onClick: () => void;
};

function CommonButton({
  isActive,
  onClick,
  title,
  variant,
}: CommonButtonProps) {
  const enableColor =
    variant === "primary" ? "bg-mainYellow30" : "bg-lyricsTranslation";
  const hoverColor =
    variant === "primary" ? "hover:bg-mainYellow60" : "hover:bg-[#FF8479]";
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`w-full py-15 rounded-6 text-Body3-sm font-semibold font-NotoSansKR ${isActive ? `cursor-pointer text-grayScaleBlack100 ${enableColor} ${hoverColor}` : " text-grayScaleBlack30 bg-grayScaleBlack50"}`}
    >
      {title}
    </button>
  );
}

export default CommonButton;
