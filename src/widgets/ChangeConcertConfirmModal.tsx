import { toast } from "react-toastify";
import WarningIcon from "../shared/assets/WarningIcon.svg";
import Lottie from "lottie-react";
import InterestConcertToastIconMotion from "../shared/assets/InterestConcertToastIconMotion.json";
import { useEffect, useState } from "react";
interface ChangeConcertConfirmModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}
function ChangeConcertConfirmModal({
  id,
  isOpen,
  onClose,
}: ChangeConcertConfirmModalProps) {
  const STORAGE_KEY = "InterestConcertId";

  const handleChange = () => {
    localStorage.setItem(STORAGE_KEY, id);
    onClose();
    toast(
      <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
        <Lottie
          animationData={InterestConcertToastIconMotion}
          loop={false}
          autoplay={true}
          renderer="svg"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
        <span>관심 공연을 변경했어요</span>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false, // 창이 다른 곳에 있어도 시간 그대로 감
      }
    );
  };
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="max-w-md m-auto fixed inset-0 bg-black bg-opacity-50 z-[70] cursor-pointer"
      />
      <div className="fixed z-[71]">
        <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={WarningIcon} alt="Warning Icon" className="mx-auto mt-20" />
          <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR text-center mt-17">
            관심 콘서트를 변경하시나요?
          </p>
          <div className="flex flex-row justify-center space-x-14 mt-20 ">
            <button
              className="bg-grayScaleBlack5 text-caution100 text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-42"
              onClick={handleChange}
            >
              변경할래요
            </button>
            <button
              className="bg-grayScaleBlack80 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-28"
              onClick={onClose}
            >
              변경하지 않아요
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangeConcertConfirmModal;
