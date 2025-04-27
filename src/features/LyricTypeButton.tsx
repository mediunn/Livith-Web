import { useState } from "react";

const lyricType = ["원어", "발음", "해석", "응원법"];

function LyricTypeButton() {
  const [activeButton, setActiveButton] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleButton = (index: number) => {
    setActiveButton((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="ml-16 mt-16 flex">
      {lyricType.map((label, index) => {
        const isActive = activeButton[index];
        return (
          <button
            key={label}
            onClick={() => toggleButton(index)}
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
