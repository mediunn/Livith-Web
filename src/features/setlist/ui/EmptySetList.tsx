import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptySetList() {
  return (
    <div className="flex flex-col items-center justify-center mt-37 mb-41 pr-16">
      <img src={EmptyIcon} className="w-50 h-40" />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR text-center mt-16 mb-0">
        셋리스트가 없어요
      </p>
    </div>
  );
}

export default EmptySetList;
