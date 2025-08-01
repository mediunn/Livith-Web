import WarningIcon from "../shared/assets/WarningIcon.svg";
interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
function DeleteConfirmModal({ isOpen, onClose }: DeleteConfirmModalProps) {
  const STORAGE_KEY = "InterestConcertId";
  const handleDelete = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.replace("/");
  };
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="max-w-md m-auto fixed inset-0 bg-black bg-opacity-50 z-40 cursor-pointer"
      />
      <div className="fixed z-50">
        <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={WarningIcon} alt="Warning Icon" className="mx-auto mt-20" />
          <p className="text-grayScaleBlack100 text-body-md font-medium font-NotoSansKR text-center mt-17">
            관심 콘서트를 삭제하시나요? <br />
            다시 언제든 지정할 수 있어요.
          </p>
          <div className="flex flex-row justify-center space-x-14 mt-20 ">
            <button
              className="bg-grayScaleBlack5 text-labelSociable100 text-body-md font-medium font-NotoSansKR rounded-11 py-18 px-20"
              onClick={handleDelete}
            >
              지금은 삭제할래요
            </button>
            <button
              className="bg-grayScaleBlack80 text-grayScaleWhite text-body-md font-medium font-NotoSansKR rounded-11 py-18 px-20"
              onClick={onClose}
            >
              잘못 눌렀어요
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteConfirmModal;
