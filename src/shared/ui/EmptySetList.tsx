import EmptyIcon from "../assets/EmptyIcon.svg";

type EmptySetListProps = {
  status: "last" | "progress" | "expectation";
};

function EmptySetList({ status }: EmptySetListProps) {
  const statusText =
    status === "last"
      ? "지난 셋리스트가"
      : status === "progress"
        ? "진행된 셋리스트가"
        : "예상 셋리스트가";

  return (
    <div className="flex flex-col items-center justify-center mt-37 mb-41 pr-16">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        {statusText}
        <br />
        없어요
      </p>
    </div>
  );
}

export default EmptySetList;
