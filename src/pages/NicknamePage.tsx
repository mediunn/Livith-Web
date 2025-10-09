import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavPrev from "../shared/assets/NavPrevIcon.svg";

function NicknamePage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const MAX_NICKNAME_LENGTH = 10;

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length > MAX_NICKNAME_LENGTH) {
      value = value.slice(0, MAX_NICKNAME_LENGTH);
    }

    setNickname(value);
  };

  return (
    <>
      <div className="pt-20 px-16 pb-8 flex justify-between items-end items-center">
        <div className="flex items-center flex-1 min-w-0">
          <button
            className="w-38 h-38 p-0 bg-transparent border-none cursor-pointer"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={NavPrev} className="w-full h-full" />
          </button>
          <p className="pl-4 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR line-clamp-1">
            닉네임 수정
          </p>
        </div>
      </div>

      <div className="px-16">
        <p className="pt-30 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          라이빗에서 사용할
          <br />
          닉네임을 설정해 주세요
        </p>
        <div className="pt-22 pb-12 flex w-full">
          <div className="flex flex items-center flex-1 px-16 py-14 bg-grayScaleBlack90 rounded-10">
            <input
              type="text"
              placeholder="예시 ) 홍길동12"
              value={nickname}
              onChange={handleChangeNickname}
              className="bg-transparent outline-none text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR placeholder-grayScaleBlack50 w-full"
            />
            <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
              {nickname.length}/10
            </p>
          </div>
          <div className="px-16 py-14 ml-12 bg-grayScaleBlack80 rounded-10">
            <p className="text-grayScaleBlack50 text-Body3-md font-medium font-NotoSansKR">
              중복확인
            </p>
          </div>
        </div>
        <p className="text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
          10자리 이내, 문자/숫자로 입력 가능해요
        </p>
      </div>

      <div className="absolute bottom-50 w-full px-16">
        <button
          disabled={nickname.length === 0} // 임시 비활성화 조건
          className={`h-52 w-full flex items-center justify-center rounded-6 text-Body2-sm font-semibold font-NotoSansKR  ${
            nickname.length > 0
              ? "bg-mainYellow30 text-grayScaleBlack100"
              : "bg-grayScaleBlack50 text-grayScaleBlack30"
          }`}
        >
          가입 완료
        </button>
      </div>
    </>
  );
}

export default NicknamePage;
