import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConcertInfoCarouselSlide from "./ConcertInfoCarouselSlide";
import "../shared/styles/slick-theme.css";
import PrevArrow from "../shared/assets/PrevArrow.svg";
import NextArrow from "../shared/assets/NextArrow.svg";
import { ConcertRequired } from "../entities/concert/api/getConcertRequiredInfo";

type ConcertInfoCarouselProps = {
  concertRequiredInfo: ConcertRequired[];
  ticketUrl: string;
};

function ConcertInfoCarousel({
  concertRequiredInfo,
  ticketUrl,
}: ConcertInfoCarouselProps) {
  // pc일 경우 마우스 hover시 캐러셀 전환 버튼 나타나도록
  const [isHovered, setIsHovered] = useState(false);

  const CustomPrevArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-16 top-111 w-38 h-38 z-10 bg-transparent border-none p-0 cursor-pointer
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={PrevArrow} alt="prev" className="w-10 h-19 ml-14" />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute right-16 top-111 w-38 h-38 z-10 bg-transparent border-none p-0 cursor-pointer
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={NextArrow} alt="next" className="w-10 h-19 ml-14" />
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
      className="relative w-full h-274"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {concertRequiredInfo.map((slide) => (
          <ConcertInfoCarouselSlide
            key={slide.id}
            category={slide.category}
            content={slide.content}
            imageUrl={slide.imgUrl}
            ticketUrl={ticketUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ConcertInfoCarousel;
