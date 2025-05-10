interface LyricTypeButtonProps {
  activeButtons: boolean[];
  onToggle: (index: number) => void;
}

const lyricType = ["원어", "발음", "해석", "응원법"];

function LyricTypeButton({ activeButtons, onToggle }: LyricTypeButtonProps) {
  return (
    <div className="mt-16 flex justify-center">
      {lyricType.map((label, index) => {
        const isActive = activeButtons[index];
        return (
          <button
            key={label}
            onClick={() => onToggle(index)}
            className={`
              h-30 px-17 rounded-35 text-caption-lg font-semibold font-NotoSansKR border border-solid cursor-pointer
              ${isActive ? "bg-mainYellow30 border-mainYellow60 text-grayScaleBlack100" : "bg-grayScaleBlack100 border-grayScaleBlack80 text-grayScaleWhite"}
              ${index !== 0 ? "ml-10" : ""}
            `}
          >
            {label} {isActive ? "on" : "off"}
          </button>
        );
      })}
    </div>
  );
}

export default LyricTypeButton;
