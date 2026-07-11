import { useState } from "react";
import ListHeader from "../shared/ui/ListHeader";
import CommonButton from "../shared/ui/CommonButton/CommonButton";

function RequestInfoPage() {
  const [concertName, setConcertName] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isButtonEnabled = concertName.trim().length > 0;

  function handleRequest(): void {}

  return (
    <div className="flex flex-col min-h-screen">
      <ListHeader title={"공연 요청"} />
      <div className="flex flex-col flex-1 px-16 py-20">
        <div>
          <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
            필요한 공연 정보를 요청하면
            <br /> 빠르게 등록까지 도와드려요
          </p>
          <p className="pt-8 text-grayScaleBlack50 text-Body4-md font-medium font-NotoSansKR">
            지난 공연은 관심 콘서트에 추가할 수 없어요
          </p>
        </div>
        <div>
          <div className="pt-20">
            <div className="flex items-center">
              <p className="text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR">
                공연명
              </p>
              <p className="pl-4 text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
                필수
              </p>
            </div>
            <div className="mt-10 flex items-center px-12 rounded-10 bg-grayScaleBlack90 border border-transparent focus-within:border-grayScaleBlack50">
              <input
                type="text"
                maxLength={50}
                value={concertName}
                onChange={(e) => setConcertName(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 py-15 bg-transparent text-grayScaleWhite placeholder:text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR outline-none"
                placeholder="공연 명을 입력해 주세요"
              />
              {isFocused && (
                <p className="ml-12 text-Caption1-re text-grayScaleBlack50">
                  {concertName.length}/50
                </p>
              )}
            </div>
          </div>
          <div className="pt-20">
            <div className="flex items-center">
              <p className="text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR">
                URL
              </p>
              <p className="pl-4 text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
                선택
              </p>
            </div>
            <div className="mt-10 px-12 rounded-10 bg-grayScaleBlack90 border border-transparent focus-within:border-grayScaleBlack50">
              <input
                type="text"
                className="w-full py-15 bg-transparent text-grayScaleWhite placeholder:text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR outline-none"
                placeholder="공연 정보를 확인할 수 있는 URL을 추가해 주세요"
              />
            </div>
          </div>
          <div className="pt-20">
            <div className="flex items-center">
              <p className="text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR">
                추가 작성
              </p>
              <p className="pl-4 text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
                선택
              </p>
            </div>
            <div className="mt-10 px-12 rounded-10 bg-grayScaleBlack90 border border-transparent focus-within:border-grayScaleBlack50">
              <textarea
                className="w-full h-248 py-15 bg-transparent text-grayScaleWhite placeholder:text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR resize-none outline-none"
                placeholder={`아티스트 명이나 공연 일자를 적어주시면\n더 빠르게 등록되어요!`}
              />
            </div>
          </div>
        </div>
        <div className="mt-auto pb-50">
          <CommonButton
            variant="primary"
            isActive={isButtonEnabled}
            title="요청하기"
            onClick={handleRequest}
          />
        </div>
      </div>
    </div>
  );
}

export default RequestInfoPage;
