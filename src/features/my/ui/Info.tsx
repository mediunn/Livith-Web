import MyNextArrow from "../../../shared/assets/MyNextArrow.svg";
import FeedbackIcon from "../../../shared/assets/FeedbackIcon.svg";

function Info() {
  const handleClick = () => {
    window.location.href = "https://forms.gle/q7uQEr4XSiQmoVkM6";
  };

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
      <img
        onClick={handleClick}
        src={FeedbackIcon}
        className="w-full h-full px-16 py-20"
      />

      <div className="pl-16 pr-18">
        <div className="mt-14 flex justify-between">
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            버전 정보
          </p>
          <p className="m-0 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
            1.1.1
          </p>
        </div>

        <div
          onClick={handleClickUpdate}
          className="mt-30 flex justify-between cursor-pointer"
        >
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            업데이트 노트
          </p>
          <button className="w-8 h-16 p-0 bg-transparent border-none">
            <img src={MyNextArrow} className=" w-full h-full" />
          </button>
        </div>

        <div
          onClick={handleClickCondition}
          className="mt-30 flex justify-between cursor-pointer"
        >
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            이용약관
          </p>
          <button className="w-8 h-16 p-0 bg-transparent border-none ">
            <img src={MyNextArrow} className=" w-full h-full" />
          </button>
        </div>

        <div className="mt-30">
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            로그아웃
          </p>
        </div>

        <div className="mt-30">
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            회원탈퇴
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
