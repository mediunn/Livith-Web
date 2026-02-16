import { useRef, useState } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../../shared/ui/Checkbox/Checkbox";
import { useMarketingConsent } from "../../../entities/notification/model/useMarketingConsent";
import { MarketingConsent } from "../../../entities/notification/api/postMarketingConsent";

interface AgreeSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  onAgree: (data: MarketingConsent) => void;
}

function AgreeSheet({ isSheetOpen, onSheetClose, onAgree }: AgreeSheetProps) {
  const ref = useRef<SheetRef>(null);
  const { mutate: agreeMarketing } = useMarketingConsent();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleAgreeClick = () => {
    agreeMarketing(
      { isAgreed: true },
      {
        onSuccess: (response) => {
          onAgree(response.data);
        },
      },
    );
  };

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      "https://www.notion.so/youz2me/v-26-02-03-2fb02dd0e5fc80af9708cf5e39f44f77",
      "_blank",
      "noopener,noreferrer",
    );
  };

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
          <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            선택한 선호 장르·아티스트를 <br />
            바탕으로 공연 정보를 알려드려요
          </p>
          <p className="pt-8 pb-20 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
            추천 공연 알림은 정보 수신 동의가 필요해요
          </p>

          <div className="overflow-y-auto">
            <div className="flex items-center justify-between mb-30">
              <div
                className="flex items-center cursor-pointer "
                onClick={handleCheckboxClick}
              >
                <Checkbox variant="line" isPressed={isChecked} />
                <p className="text-grayScaleBlack5 text-Body2-md font-medium font-NotoSansKR">
                  마케팅 활용 / 광고성 정보 수신 동의 (선택)
                </p>
              </div>
              <p
                onClick={handleMoreClick}
                className="ml-10 text-Caption2-sm text-grayScaleBlack30 font-semibold font-NotoSansKR cursor-pointer"
              >
                더보기 &gt;
              </p>
            </div>
          </div>

          <div className="flex gap-10 mb-50">
            <button
              onClick={() => {
                onSheetClose();
                navigate("/my", { replace: true });
              }}
              className="flex-1 py-15 rounded-6 bg-grayScaleBlack80 text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR"
            >
              괜찮아요
            </button>
            <button
              disabled={!isChecked}
              onClick={handleAgreeClick}
              className={`flex-1 py-15 rounded-6 text-Body3-sm font-semibold font-NotoSansKR transition-colors
                ${
                  isChecked
                    ? "bg-mainYellow30 text-grayScaleBlack100"
                    : "bg-grayScaleBlack50 text-grayScaleBlack30"
                }`}
            >
              알림을 받을래요
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

export default AgreeSheet;
