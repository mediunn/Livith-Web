import { Sheet, SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import EditInterestConcertIcon from "../../../shared/assets/EditIcon.svg";
import TrashCanIcon from "../../../shared/assets/TrashCanIcon.svg";
import { useNavigate } from "react-router-dom";
import { useBodyScrollLock } from "../../../shared/model/useBodyScrollLock";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import { useDeleteInterestConcert } from "../../interest/model/useDeleteInterestConcert";
import DangerModal from "../../../shared/ui/DangerModal";

interface EditBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  concertId: number;
}

function EditInterestConcertBottomSheet({
  isSheetOpen,
  onSheetClose,
  concertId,
}: EditBottomSheetProps) {
  const ref = useRef<SheetRef>(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate: deleteConcert } = useDeleteInterestConcert();

  useBodyScrollLock(isSheetOpen);

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
        setIsModalOpen(false);
        onSheetClose();
      },
      onError: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <>
      <Sheet isOpen={isSheetOpen} onClose={onSheetClose} ref={ref}>
        <Sheet.Container
          className="!mx-auto !max-w-md !h-fit !bg-grayScaleBlack90 !rounded-t-20 border border-grayScaleBlack80"
          style={{
            left: "0",
            right: "0",
          }}
        >
          <Sheet.Header className="cursor-pointer" />
          <Sheet.Content className="!px-12 space-y-11 py-17">
            <div
              onClick={() => {
                window.amplitude.track("click_change_main_concert");
                navigate("/set-concert");
              }}
              className="flex flex-row py-15 space-x-16 px-17 cursor-pointer"
            >
              <img src={EditInterestConcertIcon} />
              <div className="text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR">
                메인 콘서트 바꾸기
              </div>
            </div>
            <div
              onClick={() => {
                window.amplitude.track("click_delete_concert");
                onSheetClose();
                setIsModalOpen(true);
              }}
              className="flex flex-row py-15 space-x-16 px-17 cursor-pointer"
            >
              <img src={TrashCanIcon} />
              <p className="text-lyricsTranslation text-Body2-md font-medium font-NotoSansKR ">
                콘서트 삭제하기
              </p>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop
          onTap={onSheetClose}
          className="!max-w-md !mx-auto"
          style={{
            left: "0",
            right: "0",
          }}
        />
      </Sheet>
      <DangerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <>
            관심 콘서트를 삭제하시나요? <br /> 다시 언제든 지정할 수 있어요.
          </>
        }
        primaryLabel="지금은 삭제할래요"
        secondaryLabel="잘못 눌렀어요"
        onPrimary={handleDelete}
      />
    </>
  );
}

export default EditInterestConcertBottomSheet;
