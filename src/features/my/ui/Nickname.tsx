import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";

function Nickname() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  return (
    <>
      <div className="flex justify-between h-297 inset-0 bg-gradient-to-b from-grayScaleBlack80 to-transparent opacity-100">
        <div className="mx-16 mt-213 mb-20 w-full flex justify-between items-end items-center">
          <div className="">
            <div className="flex items-center">
              <p className="mr-2 text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
                {user?.nickname}
              </p>
              <p className="text-grayScaleBlack30 text-Head1-md font-medium font-NotoSansKR">
                님, 반가워요!
              </p>
            </div>
            <p className="text-grayScaleBlack30 text-Head1-md font-medium font-NotoSansKR">
              공연 준비 시작해 볼까요?
            </p>
          </div>
          <button
            onClick={() => navigate(`/nickname`)}
            className="hover:bg-grayScaleBlack90 px-12 py-6 bg-grayScaleBlack80 rounded-17 text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR"
          >
            닉네임 수정
          </button>
        </div>
      </div>
      <div className="w-full h-5 bg-[#29303C]"></div>
    </>
  );
}

export default Nickname;
