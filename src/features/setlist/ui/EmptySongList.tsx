import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

function EmptySongList() {
  return (
    <div className="space-y-16 flex flex-col items-center mt-76 ">
      <img
        src={EmptyIcon}
        alt="Empty Icon"
        className="object-cover ml-5 rounded-6"
      />
      <p className="text-center text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR">
        노래가 곧 <br /> 채워질 예정이에요
      </p>
    </div>
  );
}

export default EmptySongList;
