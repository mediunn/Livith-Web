import { Sheet, SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import EditInterestConcertIcon from "../../../shared/assets/EditIcon.svg";
import TrashCanIcon from "../../../shared/assets/TrashCanIcon.svg";
import { useNavigate } from "react-router-dom";
import DeleteConfirmModal from "../../../widgets/DeleteConfirmModal";

interface EditBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
}

function EditInterestConcertBottomSheet({
  isSheetOpen,
  onSheetClose,
}: EditBottomSheetProps) {
  const ref = useRef<SheetRef>(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <img src={EditInterestConcertIcon} alt="Edit Icon" className="" />
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
              <img src={TrashCanIcon} alt="Trash Icon" />
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
      <DeleteConfirmModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          onSheetClose();
        }}
      />
    </>
  );
}

export default EditInterestConcertBottomSheet;
