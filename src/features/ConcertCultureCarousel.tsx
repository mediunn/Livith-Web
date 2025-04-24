import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConcertCultureCarouselSlide from "../shared/ui/ConcertCultureCarouselSlide";
import "../shared/styles/slick-theme.css";
import PrevArrow from "../shared/assets/PrevArrow.svg";
import NextArrow from "../shared/assets/NextArrow.svg";

function ConcertCultureCarousel() {
  // pc일 경우 마우스 hover시 캐러셀 전환 버튼 나타나도록
  const [isHovered, setIsHovered] = useState(false);

  const CustomPrevArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-0 top-49 w-38 h-38 z-10 bg-transparent border-none p-0
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={PrevArrow} alt="prev" className="w-10 h-19" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute right-32 top-49 w-38 h-38 z-10 bg-transparent border-none p-0
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={NextArrow} alt="next" className="w-10 h-19" />
      </button>
    );
  };

  const settings = {
    dots: true /* 인덱스 */,
    arrows: true /* 버튼 전환 허용 */,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true /* 스와이프 전환 허용 */,
    draggable: true /* 드래그 전환 허용 */,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="slider-container relative w-375 h-135 pb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <ConcertCultureCarouselSlide
            key={index}
            text={slide.text}
            imageUrl={slide.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ConcertCultureCarousel;

const slideData = [
  {
    text: '앵콜 무대 전에 각자 준비해온 "손수건"을 던져야 해요',
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfm09-_Zpps0psShmq7VMODDvga6tOcEwNw&s",
  },
  {
    text: '앵콜 무대 전에 "응원봉"을 들고 "파도타기"를 해요',
    imageUrl:
      "https://img.seoul.co.kr/img/upload/2019/10/30/SSI_20191030200936.jpg",
  },
  {
    text: '직접 제작한 "비즈팔찌"를 팬들과 교환해요',
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pUTNDB4G3kQKU5QWo7LD3nCkH1AgCoqnrg&s",
  },
];
