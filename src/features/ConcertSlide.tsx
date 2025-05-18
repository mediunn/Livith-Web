import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConcertSlideCard from "../shared/ui/ConcertSlideCard";
import "../shared/styles/concert-slide.css";
import ConcertSlidePrevArrow from "../shared/assets/ConcertSlidePrevArrow.svg";
import ConcertSlideNextArrow from "../shared/assets/ConcertSlideNextArrow.svg";
import { ConcertStatus, Concert } from "../entities/concert/types";
import EmptyConcertSlide from "../shared/ui/EmptyConcertSlide";
import { formatConcertDate } from "../shared/utils/formatConcertDate";

type ConcertSlideProps = {
  status: ConcertStatus;
  concerts: Concert[];
};

function ConcertSlide({ status, concerts }: ConcertSlideProps) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 2;

  // 엠티뷰 렌더링 조건
  if (concerts.length === 0) {
    return <EmptyConcertSlide status={status} />;
  }

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
    const maxIndex = concerts.length - slidesToShow;
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
        {concerts.map((concert) => (
          <ConcertSlideCard
            key={concert.id}
            imageUrl={concert.poster}
            title={concert.title}
            date={formatConcertDate(concert.startDate, concert.endDate)}
            status={status}
            daysLeft={concert.daysLeft}
            onClick={() =>
              navigate(`/concert/${concert.id}`, { state: { status } })
            }
          />
        ))}
      </Slider>
    </div>
  );
}

export default ConcertSlide;
