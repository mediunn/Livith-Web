import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

function EmptyRecommedConcertSlide() {
  return (
    <div className="flex flex-col items-center justify-center mt-30 mb-30">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        아직 공연 소식이 없어요 : (
        <br />
        알림으로 가장 먼저 알려드릴게요
      </p>
    </div>
  );
}

export default EmptyRecommedConcertSlide;
