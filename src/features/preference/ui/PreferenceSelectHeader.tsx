interface PreferenceSelectHeaderProps {
  type?: "장르" | "아티스트";
  count: number;
}
function PreferenceSelectHeader({ type, count }: PreferenceSelectHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-8">
          선호하는 {type}를 <br /> 3개 선택해 주세요
        </div>
        <div className="flex flex-1 justify-end">
          <span className="text-Body4-md text-grayScaleBlack50 font-medium font-NotoSansKR">
            {count}/3
          </span>
        </div>
      </div>
      <span className="text-Body4-sm text-grayScaleBlack50 font-semibold font-NotoSansKR">
        마이페이지에서 언제든 바꿀 수 있어요
      </span>
    </div>
  );
}
export default PreferenceSelectHeader;
