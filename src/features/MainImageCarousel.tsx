import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlide from "../shared/CarouselSlide";
import "../shared/styles/slick-theme.css";

function MainImageCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true,
    draggable: true,
  };

  return (
    <div className="slider-container">
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
