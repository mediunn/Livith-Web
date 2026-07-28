import { useRef } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
interface AutoRegisterBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  onRegister: (autoRegister: boolean) => void;
}

function AutoRegisterBottomSheet({
  isSheetOpen,
  onSheetClose,
  onRegister,
}: AutoRegisterBottomSheetProps) {
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
          <p className="pb-8 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            콘서트가 등록되면
            <br />
            관심 콘서트로 자동 등록할까요?
          </p>
          <p className="pb-20 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
            관심 콘서트로 등록하면 예매 알림,
            <br />
            콘서트 정보 업데이트 소식을 빠르게 받아볼 수 있어요!
          </p>
          <div className="flex gap-10 mb-24">
            <button
              onClick={() => onRegister(false)}
              className="flex-1 py-15 rounded-6 bg-grayScaleBlack80 text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR"
            >
              괜찮아요
            </button>
            <button
              onClick={() => {
                onRegister(true);
                window.amplitude.track("click_concert_request_ added");
              }}
              className={`flex-1 py-15 rounded-6 bg-mainYellow30 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR 
            `}
            >
              등록할래요
            </button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={onSheetClose}
        className="!max-w-md !mx-auto !bg-grayScaleBlack100 !opacity-80"
        style={{
          left: "0",
          right: "0",
        }}
      />
    </Sheet>
  );
}

export default AutoRegisterBottomSheet;
