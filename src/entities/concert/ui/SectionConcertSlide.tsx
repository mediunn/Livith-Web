import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import SectionConcertSlideCard from "./SectionConcertSlideCard";
import ConcertSlidePrevArrow from "../../../shared/assets/ConcertSlidePrevArrow.svg";
import ConcertSlideNextArrow from "../../../shared/assets/ConcertSlideNextArrow.svg";
import { SectionConcert } from "../types";
import { formatDateRange } from "../../../shared/utils/formatDateRange";

type SectionConcertSlideProps = {
  concerts: SectionConcert[];
  onClick?: () => void;
};

function SectionConcertSlide({ concerts }: SectionConcertSlideProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);
  const slidesToScroll = 2;

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex + slidesToScroll);
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(swiperRef.current.activeIndex - slidesToScroll);
    }
  };

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const updateState = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChangeTransitionEnd", updateState);
    swiper.on("touchEnd", updateState);
    swiper.on("transitionEnd", updateState);
    swiper.on("resize", updateState);

    updateState();

    return () => {
      swiper.off("slideChangeTransitionEnd", updateState);
      swiper.off("touchEnd", updateState);
      swiper.off("transitionEnd", updateState);
      swiper.off("resize", updateState);
    };
  }, []);

  return (
    <div
      className="relative ml-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Prev Button */}
      {!isBeginning && (
        <button
          className={`absolute z-10 top-74 left-0 w-48 h-48 bg-transparent p-0 border-none
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={goPrev}
        >
          <img src={ConcertSlidePrevArrow} className="w-full h-full" />
        </button>
      )}

      {/* Next Button */}
      {!isEnd && (
        <button
          className={`absolute z-10 top-74 right-16 w-48 h-48 bg-transparent p-0 border-none
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={goNext}
        >
          <img src={ConcertSlideNextArrow} className="w-full h-full" />
        </button>
      )}

      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {concerts.map((concert) => (
          <SwiperSlide key={concert.id} style={{ width: 108 }}>
            <SectionConcertSlideCard
              imageUrl={concert.poster}
              title={concert.title}
              artist={concert.artist}
              date={formatDateRange(concert.startDate, concert.endDate)}
              status={concert.status}
              daysLeft={concert.daysLeft}
              onClick={() => navigate(`/concert/${concert.id}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SectionConcertSlide;
