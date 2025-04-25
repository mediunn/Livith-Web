import CultureTextIcon from "../assets/CultureTextIcon.svg";

type ConcertCultureCarouselSlideProps = {
  text: string;
  imageUrl: string;
};

function ConcertCultureCarouselSlide({
  text,
  imageUrl,
}: ConcertCultureCarouselSlideProps) {
  const highlightText = (text: string) => {
    // 따옴표로 감싸진 부분 찾기
    const regex = /"([^"]+)"/g;
    return text.split(regex).map((part, index) => {
      if (index % 2 !== 0) {
        return (
          <span
            key={index}
            className="text-mainYellow30 text-body-lg font-semibold font-NotoSansKR"
          >
            {part}
          </span>
        );
      }
      // 나머지는 그대로 출력
      return part;
    });
  };

  return (
    <div className="relative w-343 h-135">
      <img
        src={imageUrl}
        alt={text}
        className="w-full h-full object-cover rounded-6"
      />
      <img
        src={CultureTextIcon}
        className="absolute left-1/2 top-16 w-13 h-21"
      ></img>
      <p className="absolute inset-0 w-191 h-50 left-1/4 top-1/3 text-center text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR m-0">
        {highlightText(text)}
      </p>
    </div>
  );
}

export default ConcertCultureCarouselSlide;
