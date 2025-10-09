import { useState, useRef, useEffect } from "react";

function CommentInputBar() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // textarea 높이
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "21px";
    const lineHeight = 21;
    const maxHeight = lineHeight * 4; // 최대 4줄

    textarea.style.height =
      textarea.scrollHeight > maxHeight
        ? `${maxHeight}px`
        : `${textarea.scrollHeight}px`;
  }, [value]);

  // 등록 버튼 활성화 조건
  const isActive = value.length > 0 && value.length <= 400;

  return (
    <div className="absolute bottom-0 px-16 py-10 flex justify-between items-end w-full">
      <div className="flex items-center flex-1 px-16 py-14 bg-grayScaleBlack90 rounded-10">
        <textarea
          ref={textareaRef}
          value={value}
          placeholder="로그인 후 작성 가능해요"
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent outline-none text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR placeholder-grayScaleBlack50 w-full resize-none overflow-y-auto"
          rows={1}
          style={{
            lineHeight: "21px",
            maxHeight: "84px",
          }}
        />
      </div>
      <button
        disabled={!isActive}
        className={`px-16 py-14 ml-12 max-h-49 rounded-10 font-medium text-Body3-md font-NotoSansKR 
          ${isActive ? "bg-mainYellow30 text-grayScaleBlack100" : "bg-grayScaleBlack80 text-grayScaleBlack50"}
        `}
      >
        등록
      </button>
    </div>
  );
}

export default CommentInputBar;
