import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptySetList() {
  return (
    <div className="pt-124 pb-72 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR">
        셋리스트가 없어요
      </p>
    </div>
  );
}

export default EmptySetList;
