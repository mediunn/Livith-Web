import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ConcertSlidePrevArrow from "../../../shared/assets/ConcertSlidePrevArrow.svg";
import ConcertSlideNextArrow from "../../../shared/assets/ConcertSlideNextArrow.svg";
import { getConcertCulture, ConcertCulture } from "../api/getConcertCulture";

interface Props {
  concertId: number;
  onCultureCountChange?: (count: number) => void;
}

function FanCultureSwiper({ concertId, onCultureCountChange }: Props) {
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

  const [ConcertCulture, setConcertCulture] = useState<ConcertCulture[]>([]);

  useEffect(() => {
    const fetchConcertCulture = async () => {
      try {
        const data = await getConcertCulture(concertId);
        setConcertCulture(data);
        if (onCultureCountChange) {
          onCultureCountChange(data.length);
        }
      } catch (error) {
        console.error("특정 콘서트 공연 문화 목록 조회 API 호출 실패:", error);
      }
    };

    fetchConcertCulture();
  }, [concertId]);

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

  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
    const maxHeight = Math.max(...heights);

    cardRefs.current.forEach((el) => {
      if (el) el.style.height = `${maxHeight}px`;
    });
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
        {ConcertCulture.map((culture, i) => (
          <SwiperSlide key={i} style={{ width: 228 }}>
            <div
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="w-228 mb-37 bg-grayScaleBlack90 rounded-8 border border-grayScaleBlack80"
            >
              <div className="px-9 py-21">
                <div className="relative">
                  <div className="inline-flex items-center justify-center bg-mainYellow30 rounded-24">
                    <p className="px-13 py-4 text-grayScaleBlack100 text-caption-ssm font-regular font-NotoSansKR">
                      팬문화 {culture.id}
                    </p>
                  </div>
                  <p className="pt-10 text-grayScaleWhite text-body-md font-medium font-NotoSansKR">
                    {culture.title}
                  </p>
                </div>

                <div className="pt-13 w-full border-b border-dashed border-grayScaleBlack50" />

                <div className="flex pt-13">
                  <p className="text-grayScaleWhite text-caption-lg font-semibold font-NotoSansKR">
                    {culture.content}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FanCultureSwiper;
