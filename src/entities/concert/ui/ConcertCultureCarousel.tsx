import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConcertCultureCarouselSlide from "../../../shared/ui/ConcertCultureCarouselSlide";
import "../../../shared/styles/slick-theme.css";
import PrevArrow from "../../../shared/assets/PrevArrow.svg";
import NextArrow from "../../../shared/assets/NextArrow.svg";
import { getConcertCulture } from "../../../features/concert/api/getConcertCulture";
import EmptyConcertCulture from "../../../shared/ui/EmptyConcertCulture";

type ConcertCultureProps = {
  id: number;
  concertId: number;
  content: string;
  imgUrl: string;
};

type ConcertCultureCarouselProps = {
  concertId: number;
};

function ConcertCultureCarousel({ concertId }: ConcertCultureCarouselProps) {
  // pc일 경우 마우스 hover시 캐러셀 전환 버튼 나타나도록
  const [isHovered, setIsHovered] = useState(false);

  const [ConcertCulture, setConcertCulture] = useState<ConcertCultureProps[]>(
    []
  );

  useEffect(() => {
    const fetchConcertCulture = async () => {
      try {
        const data = await getConcertCulture(concertId);
        setConcertCulture(data);
      } catch (error) {
        console.error("특정 콘서트 문화 조회 API 호출 실패:", error);
      }
    };

    fetchConcertCulture();
  }, [concertId]);

  // 엠티뷰 조건
  if (ConcertCulture.length === 0) {
    return <EmptyConcertCulture />;
  }

  // 캐러셀 전환 버튼 표시 조건
  const showArrows = ConcertCulture.length >= 2;

  const CustomPrevArrow = (props: any) => {
    const { onClick, style } = props;
    return (
      <button
        onClick={onClick}
        style={style}
        className={`absolute left-0 top-49 w-38 h-38 z-10 bg-transparent border-none p-0 cursor-pointer
    ${isHovered && showArrows ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
        className={`absolute right-0 top-49 w-38 h-38 z-10 bg-transparent border-none p-0 cursor-pointer
          ${isHovered && showArrows ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
    <>
      {/* <EmptyConcertCulture /> */}
      <div
        className="relative w-full h-135 pb-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings}>
          {ConcertCulture.map((slide) => (
            <ConcertCultureCarouselSlide
              key={slide.id}
              content={slide.content}
              imageUrl={slide.imgUrl}
            />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ConcertCultureCarousel;
