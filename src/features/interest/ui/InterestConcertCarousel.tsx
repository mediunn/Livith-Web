import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InterestConcertCarouselSlide from "./InterestConcertCarouselSlide";
import "../../../shared/styles/slick-theme.css";
import PrevArrow from "../../../shared/assets/PrevArrow.svg";
import NextArrow from "../../../shared/assets/NextArrow.svg";
import { useInterestConcerts } from "../model/useInterestConcerts";
import { InterestSortFilter } from "../../../entities/concert/types";
import { useNavigate } from "react-router-dom";

interface InterestConcertCarouselProps {
  sort: InterestSortFilter;
}

function InterestConcertCarousel({ sort }: InterestConcertCarouselProps) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const { data: concerts = [], isLoading } = useInterestConcerts({
    size: 5,
    sort,
  });

  if (isLoading) return null;

  const CustomPrevArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-16 top-111 w-38 h-38 z-10 bg-transparent border-none p-0 cursor-pointer
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={PrevArrow} className="w-10 h-19 ml-14" />
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
        <img src={NextArrow} className="w-10 h-19 ml-14" />
      </button>
    );
  };

  const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true,
    draggable: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      className="relative w-full h-full mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {concerts.slice(0, 5).map((concert) => (
          <InterestConcertCarouselSlide
            key={concert.id}
            concert={concert}
            onClick={() => navigate(`/concert/${concert.id}`)}
          />
        ))}
      </Slider>
    </div>
  );
}

export default InterestConcertCarousel;
