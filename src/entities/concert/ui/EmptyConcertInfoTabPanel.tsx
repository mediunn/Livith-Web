import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

type EmptyConcertInfoTabPanelProps = {
  text: string;
};

function EmptyConcertInfoTabPanel({ text }: EmptyConcertInfoTabPanelProps) {
  const isCommentTab = text === "첫 댓글을 달아보세요!";

  return (
    <div
      className={`${
        isCommentTab ? "pt-40" : "pt-89"
      } pb-124 flex flex-col items-center justify-center`}
    >
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR">
        {text}
      </p>
    </div>
  );
}

export default EmptyConcertInfoTabPanel;
