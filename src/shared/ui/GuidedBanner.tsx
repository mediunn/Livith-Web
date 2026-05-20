import { useState } from "react";
import GuidedBannerIcon from "../assets/GuidedBannerIcon.svg";
import GuidedBannerCloseIcon from "../assets/GuidedBannerCloseIcon.svg";
import { useNavigate } from "react-router-dom";

interface GuidedBannerProps {
  content?: string;
  compactTitle?: string;
  compactContent?: string;
  isLoggedIn?: boolean;
}

function GuidedBanner({
  content,
  compactTitle,
  compactContent,
  isLoggedIn,
}: GuidedBannerProps) {
  const [isCompact, setIsCompact] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (isLoggedIn) {
      sessionStorage.removeItem("preferredGenres");
      window.amplitude.track("click_set_preference_banner_main");
      navigate("/set-prefer-genre");
      return;
    } else {
      window.amplitude.track("click_signup_banner_main");
      navigate("/my");
    }
  };

  return (
    <div className="w-full h-full bg-grayScaleBlack90 p-16">
      <div className="relative bg-grayScaleBlack100 rounded-10 p-16">
        {isCompact ? (
          <div
            className="flex items-center justify-between cursor-pointer "
            onClick={handleOnClick}
          >
            <div>
              <p className="text-grayScaleBlack5 text-Body2-sm font-semibold font-NotoSansKR">
                {compactTitle}
              </p>
              <p className="pt-6 text-grayScaleBlack30 text-Caption1-re font-regular font-NotoSansKR">
                {compactContent}
              </p>
            </div>
            <img src={GuidedBannerIcon} className="w-61 h-58" />
          </div>
        ) : (
          <>
            <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
              나의 취향이 담긴 콘서트를 <br />
              추천받을 수 있어요
            </p>
            <button
              className="absolute top-16 right-16 w-24 h-24 cursor-pointer"
              onClick={() => setIsCompact(true)}
            >
              <img src={GuidedBannerCloseIcon} className="w-full h-full" />
            </button>

            <div className="flex flex-col items-center justify-center">
              <img src={GuidedBannerIcon} className="w-91 h-86 my-16"></img>
              <button
                className="w-full bg-lyricsOriginal rounded-6 cursor-pointer"
                onClick={handleOnClick}
              >
                <p
                  className={`py-15 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR`}
                >
                  {content}
                </p>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GuidedBanner;
