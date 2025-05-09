import CloseIcon from "../../../shared/assets/CloseIcon.svg";
function RecentSearchItem({ word }: { word: string }) {
  return (
    <div className="w-fit border-1 border-solid border-grayScaleBlack30 rounded-26 flex items-center px-10 py-3">
      <p className="text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR mr-4 ">
        {word}
      </p>
      <img src={CloseIcon} alt="삭제 아이콘" />
    </div>
  );
}

export default RecentSearchItem;
