import { useRef } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import AutoRemovedConcert from "../../../shared/ui/AutoRemovedConcert";
import RegisteredConcert from "../../../shared/ui/RegisteredConcert";
import { EntryAlertItem } from "../api/postNotifications";
interface InterestConcertAlarmBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  autoRemovedAlerts: EntryAlertItem[];
  requestAlerts: EntryAlertItem[];
}

function InterestConcertAlarmBottomSheet({
  isSheetOpen,
  onSheetClose,
  autoRemovedAlerts,
  requestAlerts,
}: InterestConcertAlarmBottomSheetProps) {
  const ref = useRef<SheetRef>(null);

  return (
    <Sheet isOpen={isSheetOpen} onClose={onSheetClose} ref={ref}>
      <Sheet.Container
        className="!mx-auto !max-w-md !max-h-[580px] !bg-grayScaleBlack90 !rounded-t-20 border border-grayScaleBlack80 flex flex-col"
        style={{
          left: "0",
          right: "0",
        }}
      >
        <Sheet.Header className="cursor-pointer" />

        <Sheet.Content className="!px-16 flex flex-col flex-1 min-h-0">
          {/* 고정 영역 */}
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            관심 콘서트
            <br />
            소식이 도착했어요
          </p>

          <div className="absolute top-50 left-0 w-full h-20 bg-gradient-to-t from-transparent to-grayScaleBlack90 pointer-events-none" />

          {/* 스크롤 영역 */}
          <div className="flex-1 overflow-y-auto min-h-0 pb-16">
            {autoRemovedAlerts.length > 0 && (
              <AutoRemovedConcert alerts={autoRemovedAlerts} />
            )}

            {requestAlerts.length > 0 && (
              <RegisteredConcert alerts={requestAlerts} />
            )}
          </div>

          {/* 하단 버튼 */}
          <div className="relative shrink-0">
            <div className="absolute -top-16 left-0 w-full h-31 bg-gradient-to-t from-grayScaleBlack90 to-transparent pointer-events-none" />

            <div className="flex gap-10 mt-16 mb-24">
              <button
                onClick={onSheetClose}
                className="flex-1 py-15 rounded-6 bg-mainYellow30 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR"
              >
                확인
              </button>
            </div>
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
