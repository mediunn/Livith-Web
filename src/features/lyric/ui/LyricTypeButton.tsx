interface LyricTypeButtonProps {
  activeButtons: boolean[];
  onToggle: (index: number) => void;
  hasFanchant: boolean;
}

const lyricType = ["원어", "발음", "해석", "응원법"];

function LyricTypeButton({
  activeButtons,
  onToggle,
  hasFanchant,
}: LyricTypeButtonProps) {
  return (
    <div className="mt-24 px-16 flex bg-grayScaleBlack100 w-full max-w-md">
      {lyricType.map((label, index) => {
        // 응원법 버튼 비활성화 조건
        if (label === "응원법" && !hasFanchant) return null;

        const isActive = activeButtons[index];

        // 활성화 시 버튼 색
        const activeBgColor =
          label === "원어"
            ? "bg-lyricsOriginal"
            : label === "발음"
              ? "bg-grayScaleWhite"
              : label === "해석"
                ? "bg-lyricsTranslation"
                : "bg-mainYellow30";

        return (
          <div key={label}>
            <button
              key={label}
              onClick={() => onToggle(index)}
              className={`
               px-10 py-5 rounded-35 cursor-pointer
              ${isActive ? `${activeBgColor} text-grayScaleBlack100` : "bg-grayScaleBlack100 border border-solid border-grayScaleBlack80 text-grayScaleBlack50"}
              ${isActive ? "text-Body4-sm font-semibold font-NotoSansKR" : "text-Body4-md font-medium font-NotoSansKR"}
              ${index !== 0 ? "ml-8" : ""}
            `}
            >
              {label} {isActive ? "ON" : "OFF"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default LyricTypeButton;
