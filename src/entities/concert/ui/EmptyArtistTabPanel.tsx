import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";
function EmptyArtistTabPanel() {
  return (
    <div className="pt-89 pb-124 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-body-md font-medium font-NotoSansKR">
        가수 정보가 없어요
      </p>
    </div>
  );
}

export default EmptyArtistTabPanel;
