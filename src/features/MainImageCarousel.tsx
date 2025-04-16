import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainImageCarousel() {
  const settings = {
    dots: true, // 하단 인덱스
    arrows: false, // 버튼(← →) 숨기기
    fade: true, // 페이드 전환
    infinite: true, // 무한 루프
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipe: true, // 스와이프 허용
    draggable: true, // 드래그 허용
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-[375px] h-[365px]">
          <img
            src={
              "https://dimg.donga.com/wps/NEWS/IMAGE/2024/09/27/130116409.1.jpg"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[375px] h-[365px]">
          <img
            src={"https://img.wkorea.com/w/2024/03/style_660630260519d.jpg"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[375px] h-[365px]">
          <img
            src={
              "https://assets.teenvogue.com/photos/599d83c493f88961615d41f6/16:9/w_2560%2Cc_limit/GettyImages-451357572.jpg"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[375px] h-[365px]">
          <img
            src={
              "https://cdn.woman.chosun.com/news/photo/202412/118895_135875_253.jpg"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[375px] h-[365px]">
          <img
            src={
              "https://img4.yna.co.kr/etc/inner/KR/2024/10/10/AKR20241010087200005_01_i_P4.jpg"
            }
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
}

export default MainImageCarousel;
