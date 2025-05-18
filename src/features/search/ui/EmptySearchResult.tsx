import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptySearchResult() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR mt-16">
        검색 결과가 없어요
      </p>
    </div>
  );
}

export default EmptySearchResult;
