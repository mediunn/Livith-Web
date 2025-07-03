interface FanchantProps {
  line: string;
}

function LyricFanchant({ line }: FanchantProps) {
  const highlightText = (content: string) => {
    // ##로 감싸진 부분 찾기
    const regex = /##(.*?)##/g;
    return content.split(regex).map((part, index) => {
      if (index % 2 !== 0) {
        return (
          <span
            key={index}
            className="text-mainYellow60 text-body-md font-medium font-NotoSansKR"
          >
            {part}
          </span>
        );
      }
      // 나머지는 그대로 출력
      return (
        <span
          key={index}
          className="text-lyricsOriginal text-body-md font-medium font-NotoSansKR"
        >
          {part}
        </span>
      );
    });
  };

  return (
    <p className="mb-24 text-body-md font-medium font-NotoSansKR">
      {highlightText(line)}
    </p>
  );
}

export default LyricFanchant;
