import { useRef } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import AutoRemovedConcert from "../../../shared/ui/AutoRemovedConcert";
import RegisteredConcert from "../../../shared/ui/RegisteredConcert";
interface InterestConcertAlarmBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
}

function InterestConcertAlarmBottomSheet({
  isSheetOpen,
  onSheetClose,
}: InterestConcertAlarmBottomSheetProps) {
  const ref = useRef<SheetRef>(null);
  return (
    <Sheet isOpen={isSheetOpen} onClose={onSheetClose} ref={ref}>
      <Sheet.Container
        className="!mx-auto !max-w-md !h-fit !bg-grayScaleBlack90 !rounded-t-20 border border-grayScaleBlack80"
        style={{
          left: "0",
          right: "0",
        }}
      >
        <Sheet.Header className="cursor-pointer" />
        <Sheet.Content className="!px-16">
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            관심 콘서트
            <br />
            소식이 도착했어요
          </p>
          <AutoRemovedConcert />
          <RegisteredConcert />

          <div className="absolute bottom-90 left-0 w-full h-31 bg-gradient-to-t from-grayScaleBlack100 to-transparent pointer-events-none" />

          <div className="flex gap-10 mt-31 mb-24">
            <button className="flex-1 py-15 rounded-6 bg-mainYellow30 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR">
              확인
            </button>
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
  );
}

export default InterestConcertAlarmBottomSheet;
