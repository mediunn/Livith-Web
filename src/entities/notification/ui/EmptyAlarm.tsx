import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptyAlarm() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR">
        아직 공연 소식이 없어요 : (
      </p>
    </div>
  );
}

export default EmptyAlarm;
