import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ConcertSlideCard from "../../../shared/ui/ConcertSlideCard";
import ConcertSlidePrevArrow from "../shared/assets/ConcertSlidePrevArrow.svg";
import ConcertSlideNextArrow from "../shared/assets/ConcertSlideNextArrow.svg";
import EmptyConcertSlide from "../../../shared/ui/EmptyConcertSlide";
import { ConcertStatus, Concert } from "../types";
import { formatConcertDate } from "../../../shared/utils/formatConcertDate";

type ConcertSlideProps = {
  status: ConcertStatus;
  concerts: Concert[];
};

function ConcertSlide({ status, concerts }: ConcertSlideProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);
  const slidesToScroll = 2;

  if (concerts.length === 0) {
    return <EmptyConcertSlide status={status} />;
  }

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
          <img
            src={ConcertSlidePrevArrow}
            alt="prev"
            className="w-full h-full"
          />
        </button>
      )}

      {/* Next Button */}
      {!isEnd && (
        <button
          className={`absolute z-10 top-74 right-16 w-48 h-48 bg-transparent p-0 border-none
          ${isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={goNext}
        >
          <img
            src={ConcertSlideNextArrow}
            alt="next"
            className="w-full h-full"
          />
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
          <SwiperSlide key={concert.id} style={{ width: 139 }}>
            <ConcertSlideCard
              imageUrl={concert.poster}
              title={concert.title}
              date={formatConcertDate(concert.startDate, concert.endDate)}
              status={status}
              daysLeft={concert.daysLeft}
              onClick={() =>
                navigate(`/concert/${concert.id}`, { state: { status } })
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ConcertSlide;
