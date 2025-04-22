import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConcertSlideCard from "../shared/ui/ConcertSlideCard";
import "../shared/styles/concert-slide.css";
import ConcertSlidePrevArrow from "../shared/assets/ConcertSlidePrevArrow.svg";
import ConcertSlideNextArrow from "../shared/assets/ConcertSlideNextArrow.svg";

type ConcertSlideProps = {
  status: "prev" | "current" | "next";
};

function ConcertSlide({ status }: ConcertSlideProps) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 2;
  const totalSlides = cardData.length;

  const CustomConcertSlidePrevArrow = (props: any) => {
    const { onClick, style } = props;

    // 첫 슬라이드면 이전 버튼 안 보이도록
    if (currentSlide === 0) return null;

    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-0 top-74 w-48 h-48 z-10 bg-transparent border-none p-0
           ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={ConcertSlidePrevArrow} alt="prev" className="w-full h-full" />
      </button>
    );
  };

  const CustomConcertSlideNextArrow = (props: any) => {
    const { onClick, style } = props;

    // 마지막 슬라이드면 다음 버튼 안 보이도록
    const maxIndex = totalSlides - slidesToShow;
    if (currentSlide >= maxIndex) return null;

    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute right-16 top-74 w-48 h-48 z-10 bg-transparent border-none p-0
           ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={ConcertSlideNextArrow} alt="next" className="w-full h-full" />
      </button>
    );
  };

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow,
    slidesToScroll: 2 /* 카드 두 개씩 넘어가도록 */,
    swipeToSlide: true,
    prevArrow: <CustomConcertSlidePrevArrow />,
    nextArrow: <CustomConcertSlideNextArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
  };

  return (
    <div
      className="slider-container ml-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {cardData.map((slide, index) => (
          <ConcertSlideCard
            key={index}
            title={slide.title}
            date={slide.date}
            status={status}
            onClick={() => navigate(`/concert/${index}`)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ConcertSlide;

const cardData = [
  {
    title: "1 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 1",
    date: "년도.월.일~월.일​",
  },
  {
    title: "2 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 2",
    date: "년도.월.일~월.일​",
  },
  {
    title: "3 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 3",
    date: "년도.월.일~월.일​",
  },
  {
    title: "4 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 4",
    date: "년도.월.일~월.일​",
  },
  {
    title: "5 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 5",
    date: "년도.월.일~월.일​",
  },
  {
    title: "6 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 6",
    date: "년도.월.일~월.일​",
  },
  {
    title: "7 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 7",
    date: "년도.월.일~월.일​",
  },
  {
    title: "8 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 8",
    date: "년도.월.일~월.일​",
  },
  {
    title: "9 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 9",
    date: "년도.월.일~월.일​",
  },
  {
    title: "10 콘서트 명 두줄일 경우엔 이렇게 표기가 됩니다 10",
    date: "년도.월.일~월.일​",
  },
];
