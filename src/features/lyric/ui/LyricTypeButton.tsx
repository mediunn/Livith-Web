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

        const handleClick = () => {
          onToggle(index);

          if (!isActive) {
            if (label === "원어") {
              window.amplitude.track("toggle_original_on");
            } else if (label === "발음") {
              window.amplitude.track("toggle_pronunciation_on");
            } else if (label === "해석") {
              window.amplitude.track("toggle_translation_on");
            } else if (label === "응원법") {
              window.amplitude.track("toggle_cheer_on");
            }
          }
          if (isActive) {
            if (label === "원어") {
              window.amplitude.track("toggle_original_off");
            } else if (label === "발음") {
              window.amplitude.track("toggle_pronunciation_off");
            } else if (label === "해석") {
              window.amplitude.track("toggle_translation_off");
            } else if (label === "응원법") {
              window.amplitude.track("toggle_cheer_off");
            }
          }
        };

        return (
          <div key={label}>
            <button
              key={label}
              onClick={handleClick}
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
