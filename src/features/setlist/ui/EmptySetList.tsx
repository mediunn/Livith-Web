import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
import { SetlistType } from "../../../entities/setlist/types";

type EmptySetListProps = {
  type: SetlistType;
};

function EmptySetList({ type }: EmptySetListProps) {
  const typeText =
    type === "PAST"
      ? "지난 셋리스트가"
      : type === "ONGOING"
        ? "진행된 셋리스트가"
        : "예상 셋리스트가";

  return (
    <div className="flex flex-col items-center justify-center mt-37 mb-41 pr-16">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        {typeText}
        <br />
        없어요
      </p>
    </div>
  );
}

export default EmptySetList;
