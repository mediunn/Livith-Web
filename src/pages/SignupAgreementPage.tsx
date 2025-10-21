import ListHeader from "../shared/ui/ListHeader";
import CheckBox from "../shared/assets/CheckBox";
import { useEffect, useState } from "react";
function SignupAgreementPage() {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isUseChecked, setIsUseChecked] = useState(false);
  const [isAdChecked, setIsAdChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(isUseChecked && isAdChecked);
  }, [isUseChecked, isAdChecked]);

  // 모두 동의 클릭 시 모든 체크박스 상태 변경
  const handleAllCheck = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setIsUseChecked(newState);
    setIsAdChecked(newState);
  };

  return (
    <>
      <ListHeader title="회원가입" />
      <div className="flex flex-col mx-16">
        <div className="flex gap-5 mt-10 mb-30">
          <div className="h-6 rounded-16 bg-mainYellow30 flex-1" />
          <div className="h-6 rounded-16 bg-grayScaleBlack80 flex-1" />
        </div>
        <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-20">
          서비스 이용을 위해 <br /> 약관 동의가 필요해요
        </div>
        {/* 모두 동의 */}
        <div className="flex items-center bg-grayScaleBlack90 rounded-10 px-12 py-20 gap-16 mb-24">
          <button onClick={handleAllCheck}>
            {isAllChecked ? (
              <CheckBox boxColor="#FFEB56" checkColor="#2F3745" />
            ) : (
              <CheckBox boxColor="#DBDCDF" checkColor="#808794" />
            )}
          </button>
          <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR">
            약관 모두 동의
          </p>
        </div>
        {/* 이용약관 동의 */}
        <div className="flex items-center pl-12  mb-24">
          <button onClick={() => setIsUseChecked(!isUseChecked)}>
            {isUseChecked ? (
              <CheckBox checkColor="#FFEB56" />
            ) : (
              <CheckBox checkColor="#808794" />
            )}
          </button>
          <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR ml-16 mr-2">
            이용약관 동의
          </p>
          <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR">
            필수
          </p>
          <p className="cursor-pointer text-Caption2-sm text-grayScaleBlack30 font-semibold font-NotoSansKR ml-auto mr-6">
            더보기 &gt;
          </p>
        </div>
        {/* 마케팅,광고 동의 */}
        <div className="flex items-center pl-12  mb-24">
          <button onClick={() => setIsAdChecked(!isAdChecked)}>
            {isAdChecked ? (
              <CheckBox checkColor="#FFEB56" />
            ) : (
              <CheckBox checkColor="#808794" />
            )}
          </button>
          <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR ml-16 mr-2">
            마케팅 활용 / 광고성 정보 수신 동의
          </p>
        </div>
      </div>
    </>
  );
}

export default SignupAgreementPage;
