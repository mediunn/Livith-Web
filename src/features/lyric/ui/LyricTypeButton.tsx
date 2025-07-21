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
    <div className="mt-25 px-16 flex bg-grayScaleBlack100 w-full max-w-md">
      {lyricType.map((label, index) => {
        // 응원법 버튼 비활성화 조건
        if (label === "응원법" && !hasFanchant) return null;

        const isActive = activeButtons[index];
        return (
          <div className="">
            <button
              key={label}
              onClick={() => onToggle(index)}
              className={`
              h-30 px-17 rounded-35 text-caption-lg font-semibold font-NotoSansKR border border-solid cursor-pointer
              ${isActive ? "bg-mainYellow30 border-mainYellow60 text-grayScaleBlack100" : "bg-grayScaleBlack100 border-grayScaleBlack80 text-grayScaleWhite"}
              ${index !== 0 ? "ml-10" : ""}
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
