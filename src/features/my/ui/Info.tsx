import MyNextArrow from "../../../shared/assets/MyNextArrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../../../features/auth/ui/LogoutModal";

function Info() {
  const handleClickUpdate = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc800dab7fc177f325eade?pvs=4";
  };
  const handleClickCondition = () => {
    window.location.href =
      "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc80eaacd9d3dfdc7d0aa0?pvs=4";
  };

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="px-16">
        <div className="mt-30 cursor-pointer ">
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            알림 설정
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

        <div className="mt-30 flex justify-between">
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            버전 정보
          </p>
          <p className="m-0 text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
            2.1.0
          </p>
        </div>

        <div
          className="mt-30 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            로그아웃
          </p>
        </div>

        <div
          className="mt-30 mb-30 cursor-pointer"
          onClick={() => navigate("/withdraw")}
        >
          <p className="m-0 text-grayScaleBlack30 text-Body2-md font-medium font-NotoSansKR">
            회원탈퇴
          </p>
        </div>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Info;
