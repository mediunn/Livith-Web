import MyNextArrow from "../../../shared/assets/MyNextArrow.svg";

function Info() {
  const handleClickUpdate = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc800dab7fc177f325eade?pvs=4";
  };
  const handleClickCondition = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc80eaacd9d3dfdc7d0aa0?pvs=4";
  };

  return (
    <div>
      <div className="pl-16 pr-18">
        <div className="mt-36 flex justify-between">
          <p className="m-0 text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR">
            버전 정보
          </p>
          <p className="m-0 text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR">
            1.0.0
          </p>
        </div>
        <div
          onClick={handleClickUpdate}
          className="mt-30 flex justify-between cursor-pointer"
        >
          <p className="m-0 text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR">
            업데이트 노트
          </p>
          <button className="w-8 h-16 p-0 bg-transparent border-none">
            <img
              src={MyNextArrow}
              alt="next arrow"
              className=" w-full h-full"
            />
          </button>
        </div>
        <div
          onClick={handleClickCondition}
          className="mt-30 flex justify-between cursor-pointer"
        >
          <p className="m-0 text-grayScaleBlack30 text-body-sm font-regular font-NotoSansKR">
            이용약관
          </p>
          <button className="w-8 h-16 p-0 bg-transparent border-none ">
            <img
              src={MyNextArrow}
              alt="next arrow"
              className=" w-full h-full"
            />
          </button>
        </div>
      </div>
      <p className="mt-118 mb-140 text-grayScaleBlack50 text-body-md font-medium font-NotoSansKR text-center">
        라이빗은 더 도움이 될 기능을
        <br />
        가지고 돌아올게요:)
      </p>
    </div>
  );
}

export default Info;
