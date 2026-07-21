type HomeTabProps = {
  value: "interest" | "calendar";
  onChange: (tab: "interest" | "calendar") => void;
};
export function HomeTab({ value, onChange }: HomeTabProps) {
  return (
    <div className="sticky top-60 z-40 flex h-56 border-grayScaleBlack80 bg-grayScaleBlack100">
      <button
        className={`flex-1 border-b-[3px] font-semibold text-Body2-sm transition-colors ${
          value === "interest"
            ? "border-mainBlue text-grayScaleWhite"
            : "border-transparent text-grayScaleBlack50"
        }`}
        onClick={() => onChange("interest")}
      >
        관심 콘서트
      </button>

      <button
        className={`flex-1 border-b-[3px] font-semibold text-Body2-sm transition-colors ${
          value === "calendar"
            ? "border-mainBlue text-grayScaleWhite"
            : "border-transparent text-grayScaleBlack50"
        }`}
        onClick={() => onChange("calendar")}
      >
        캘린더
      </button>
    </div>
  );
}
