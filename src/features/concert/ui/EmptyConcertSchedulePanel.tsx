import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptyConcertSchedulePanel() {
  return (
    <div className="pt-124 pb-72 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR">
        콘서트 일정이 없어요
      </p>
    </div>
  );
}

export default EmptyConcertSchedulePanel;
