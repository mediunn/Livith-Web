import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import WithdrawBottomSheet from "../features/auth/ui/WithdrawBottomSheet";
import NavPrev from "../shared/assets/NavPrevIcon.svg";
import Checkbox from "../shared/ui/Checkbox/Checkbox";
import CommonButton from "../shared/ui/CommonButton/CommonButton";

function WithdrawPage() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const reasons = [
    "원하는 정보가 부족하거나 없어요",
    "서비스를 자주 이용하지 않아요",
    "서비스 오류로 이용이 불편해요",
    "기타",
  ];

  const [selected, setSelected] = useState<number[]>([]);
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input.length <= 200 ? input : input.slice(0, 200));
  };

  const handleSelect = (index: number) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isEtcSelected = selected.includes(reasons.length - 1);

  useEffect(() => {
    if (isEtcSelected && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEtcSelected]);

  const isValid =
    selected.length > 0 &&
    (!isEtcSelected || (isEtcSelected && value.trim().length >= 10));

  const selectedReasons = selected.map((i) => reasons[i]).join(", ");
  const reasonText = isEtcSelected
    ? `${selectedReasons} (${value})`
    : selectedReasons;
  return (
    <>
      <div className="pt-20 px-16 pb-8 flex justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img src={NavPrev} className="w-full h-full" />
          </button>
        </div>
      </div>

      <div className="px-16 mb-20">
        <p className="pt-30 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          정말 탈퇴하시겠어요?
        </p>
        <p className="pt-8 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
          탈퇴 이유를 알려주시면,
          <br />
          서비스 개선에 반영해 더 좋은 서비스로 찾아뵐게요
        </p>
      </div>

      <div className="px-16 pb-100">
        {reasons.map((reason, index) => {
          const isActive = selected.includes(index);
          const isEtc = reason === "기타";
          return (
            <div
              key={index}
              className="bg-grayScaleBlack90 rounded-10 px-12 py-18 mb-10 flex flex-col"
            >
              <div className="flex items-center">
                <div
                  onClick={() => handleSelect(index)}
                  className="mr-16 cursor-pointer"
                >
                  <Checkbox variant="fill" isPressed={isActive} />
                </div>
                <p className="text-grayScaleBlack5 text-Body2-md font-medium font-NotoSansKR">
                  {reason}
                </p>
              </div>

              {isEtc && isActive && (
                <div className="relative mt-27">
                  <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    placeholder="10자 이상의 사유를 작성해 주세요"
                    maxLength={200}
                    className="relative z-10 h-206 w-full px-14 pt-14 pb-30 resize-none overflow-y-auto rounded-6 bg-grayScaleBlack80 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR
                    placeholder:text-grayScaleBlack50
                    border border-transparent
                    focus:border focus:border-grayScaleBlack30
                    outline-none"
                  />
                  <div className="absolute bottom-6 left-1 h-30 w-[94%] rounded-6 bg-grayScaleBlack80">
                    <p className="absolute bottom-14 right-0 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                      {value.length}/200
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-50 left-0 w-full px-16">
        <CommonButton
          variant="primary"
          isActive={isValid}
          title="탈퇴하기"
          onClick={() => {
            openSheet();
          }}
        />
        <WithdrawBottomSheet
          isSheetOpen={isSheetOpen}
          onSheetClose={closeSheet}
          reasonText={reasonText}
        />
      </div>
    </>
  );
}

export default WithdrawPage;
