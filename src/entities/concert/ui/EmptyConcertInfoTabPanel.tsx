import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

type EmptyConcertInfoTabPanelProps = {
  text: string;
};

function EmptyConcertInfoTabPanel({ text }: EmptyConcertInfoTabPanelProps) {
  return (
    <div className="pt-89 pb-124 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR">
        {text}가 없어요
      </p>
    </div>
  );
}

export default EmptyConcertInfoTabPanel;
