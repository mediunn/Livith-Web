interface BtnPopupInProps {
  onClick?: () => void;
  icon?: string;
  label?: string;
  color?: "red" | "white";
}
export default function BtnPopupIn({
  onClick,
  icon,
  label,
  color,
}: BtnPopupInProps) {
  const textColor =
    color === "red" ? "text-lyricsTranslation" : "text-grayScaleWhite";
  return (
    <div
      onClick={onClick}
      className="hover:bg-grayScaleBlack100 bg-grayScaleBlack90 flex flex-row py-15 space-x-16 px-17 cursor-pointer rounded-8"
    >
      <img src={icon} />
      <div className={`${textColor} text-Body2-md font-medium font-NotoSansKR`}>
        {label}
      </div>
    </div>
  );
}
