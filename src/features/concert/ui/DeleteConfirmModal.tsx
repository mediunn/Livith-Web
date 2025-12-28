import { AnimatePresence, motion } from "framer-motion";
import WarningIcon from "../../../shared/assets/WarningIcon.svg";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import { useNavigate } from "react-router-dom";
import { useDeleteInterestConcert } from "../../interest/model/useDeleteInterestConcert";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  concertId: number;
}
function DeleteConfirmModal({ isOpen, onClose }: DeleteConfirmModalProps) {
  const navigate = useNavigate();
  const { mutate: deleteConcert } = useDeleteInterestConcert();

  const handleDelete = () => {
    window.amplitude.track("click_confirm_delete");

    deleteConcert(undefined, {
      onSuccess: () => {
        toast(<CompleteToast message="관심 콘서트가 삭제되었어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
        navigate("/");
        onClose();
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="max-w-md m-auto fixed inset-0 bg-grayScaleBlack100 z-40 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            className="fixed z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={WarningIcon} className="mx-auto mt-20" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium text-center mt-17">
                관심 콘서트를 삭제하시나요? <br />
                다시 언제든 지정할 수 있어요.
              </p>
              <div className="flex flex-row justify-center space-x-14 mt-20">
                <button
                  className="bg-grayScaleBlack5 text-caution100 text-Body4-re font-regular rounded-8 py-18 px-22"
                  onClick={handleDelete}
                >
                  지금은 삭제할래요
                </button>
                <button
                  className="bg-grayScaleBlack80 text-grayScaleWhite text-Body4-re font-regular rounded-8 py-18 px-34"
                  onClick={() => {
                    window.amplitude.track("click_cancel_delete");
                    onClose();
                  }}
                >
                  잘못 눌렀어요
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default DeleteConfirmModal;
