import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlide from "../shared/CarouselSlide";
import "../shared/styles/slick-theme.css";

// SVG 경로
import PrevArrow from "../shared/assets/PrevArrow.svg";
import NextArrow from "../shared/assets/NextArrow.svg";

function MainImageCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  const CustomPrevArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-16 top-111 w-38 h-38 z-10 bg-transparent border-none p-0
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
        className={`absolute right-16 top-111 w-38 h-38 z-10 bg-transparent border-none p-0
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img src={NextArrow} alt="next" className="w-10 h-19" />
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
      className="slider-container relative w-[375px] h-[365px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <CarouselSlide
            key={index}
            category={slide.category}
            title={slide.title}
            imageUrl={slide.imageUrl}
          />
        ))}
      </Slider>
    </div>
  );
}

export default MainImageCarousel;

const slideData = [
  {
    category: "추천 콘서트",
    title: "The Mayhem Ball​",
    imageUrl: "https://img.wkorea.com/w/2017/02/style_58981ed0b6b87.jpg",
  },
  {
    category: "추천 콘서트",
    title: "Taylor Swift",
    imageUrl: "https://img.wkorea.com/w/2024/03/style_660630260519d.jpg",
  },
  {
    category: "추천 콘서트",
    title: "Ariana Grande",
    imageUrl:
      "https://assets.teenvogue.com/photos/599d83c493f88961615d41f6/16:9/w_2560%2Cc_limit/GettyImages-451357572.jpg",
  },
  {
    category: "추천 콘서트",
    title: "Coldplay",
    imageUrl:
      "https://dimg.donga.com/wps/NEWS/IMAGE/2024/09/27/130116409.1.jpg",
  },
  {
    category: "추천 콘서트",
    title: "Charlie Puth",
    imageUrl:
      "https://img4.yna.co.kr/etc/inner/KR/2024/10/10/AKR20241010087200005_01_i_P4.jpg",
  },
];
