import Lottie from "lottie-react";
import TopBar from "../../../shared/ui/TopBar";
import ConcertAddMotion from "../../../shared/assets/ConcertAddIconMotion.json";
import { useNavigate } from "react-router-dom";
import HomeConcertListSection from "../../../widgets/HomeConcertListSection";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";
import LoginModal from "../../../features/auth/ui/LoginModal";
import SignUpTooltip from "./SignUpTooltip/SignUpTooltip";
import { useHomeConcertListSection } from "../model/useHomeConcertListSection";

interface ConcertSettingEmptyProps {
  group: "A" | "B" | "C";
}

function ConcertSettingEmpty({ group }: ConcertSettingEmptyProps) {
  const { data: sections, isLoading } = useHomeConcertListSection();

  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  //로그인 되어있는지 확인
  const user = useRecoilValue(userState);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSetInterestConcert = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    window.amplitude.track("click_interest_concert_main");
    navigate("/set-concert", { state: { group } });
  };

  return (
    <>
      <div className="flex justify-between items-end bg-grayScaleBlack90 rounded-bl-20 px-16 pt-24 pb-30 relative">
        <div>
          <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            {user ? (
              <>
                {user.nickname}님,
                <br />
                기다리는
                <br />
                콘서트가 있나요?
              </>
            ) : (
              <>
                반가워요!
                <br />
                기다리는
                <br />
                콘서트가 있나요?
              </>
            )}
          </p>
        </div>

        <div className="relative">
          <button
            className="w-148 h-136 bg-grayScaleBlack80 hover:bg-grayScaleBlack100 rounded-10 border-none cursor-pointer"
            onClick={handleSetInterestConcert}
          >
            <div className="flex flex-col items-center">
              <Lottie
                animationData={ConcertAddMotion}
                loop={true}
                className="w-40 h-40"
              />
              {group === "A" && !user ? (
                <p className="mt-7 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
                  30초 로그인 후 <br />
                  관심 콘서트 설정
                </p>
              ) : (
                <p className="mt-7 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
                  관심 콘서트 설정
                </p>
              )}
            </div>
          </button>
        </div>
        {!user && (
          <SignUpTooltip
            group={group}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>

      <div className="pb-30">
        {sections?.map((section) => (
          <HomeConcertListSection
            key={section.id}
            section={section}
            isLoading={isLoading}
          />
        ))}
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="interestConcert"
        group={group}
      />
    </>
  );
}

export default ConcertSettingEmpty;
