import { useLocation, useNavigate } from "react-router-dom";
import ListHeader from "../shared/ui/ListHeader";
import ProgressBar from "../shared/ui/ProgressBar/ProgressBar";
import PreferenceSelectHeader from "../features/preference/ui/PreferenceSelectHeader";
import GenreList from "../entities/genre/ui/GenreList";
import { useEffect, useState } from "react";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import { useInitializeAuth } from "../shared/hooks/useInitializeAuth";
import { useSignup } from "../features/auth/model/useSignup";
import AuthErrorModal from "../features/auth/ui/AuthErrorModal";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import useInfiniteSearchFeaturedArtist from "../entities/featured-artist/model/useInfiniteSearchFeaturedArtist";
import InfiniteFeaturedArtistList from "../entities/featured-artist/ui/InfiniteFeaturedArtistList";
import PreferredSection from "../features/preference/ui/PreferredSection";

function SignupPreferArtistPage() {
  // 키보드 오픈 상태 관리
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdChecked = false, tempUserData } = location.state || {};
  const [input, setInput] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(true);
  // 검색 결과를 보여줄지 여부
  const [showResults, setShowResults] = useState(false);

  const [preferred, setPreferred] = useState<{ id: number; label: string }[]>(
    [],
  );

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const { mutate: signupMutate, isPending } = useSignup();

  const { initialize } = useInitializeAuth();

  const {
    data: artists,
    isLoading,
    error,
  } = useInfiniteSearchFeaturedArtist({ keyword: input, size: 20 });

  const handleSignup = ({ skip = false }) => {
    sessionStorage.removeItem("isAdChecked");
    sessionStorage.removeItem("isUseChecked");
    if (!tempUserData) {
      setIsErrorModalOpen(true);
      return;
    }
    signupMutate(
      {
        nickname: tempUserData.nickname,
        provider: tempUserData.provider,
        providerId: tempUserData.providerId,
        email: tempUserData.email,
        marketingConsent: isAdChecked,
        preferredGenreIds: [...preferred.map((item) => item.id)],
        preferredArtistIds: skip ? [] : [...preferred.map((item) => item.id)],
      },
      {
        onSuccess: async (res) => {
          const { accessToken } = res.data;
          if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("recentLogin", "카카오");

            await initialize(); // 회원가입 후 바로 로그인
          }
          navigate("/", {
            state: {
              showSignupComplete: true,
              nickname: tempUserData.nickname,
            },
          });
        },
        onError: (error) => {
          setIsErrorModalOpen(true);
        },
      },
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="flex">
          <ListHeader
            title="회원가입"
            rightElement={
              <span
                onClick={() => handleSignup({ skip: true })}
                className="text-Body4-re font-regular text-grayScaleBlack50 justify-end m-8 cursor-pointer"
              >
                건너뛰기
              </span>
            }
          />
        </div>
        <div className="flex flex-col mx-16 ">
          <div className="mt-10 mb-10">
            <ProgressBar total={4} current={4} />
          </div>
          {showAll && (
            <div className="py-20">
              <PreferenceSelectHeader
                type="아티스트"
                count={preferred.length}
              />
            </div>
          )}
          <InputSearchBar
            inputState={{ value: input, setValue: setInput }}
            showAllState={{ value: showAll, setValue: setShowAll }}
            showResultsState={{
              value: showResults,
              setValue: setShowResults,
            }}
            placeholder="아티스트를 검색하세요"
            onFocus={() => setIsKeyboardOpen(true)}
            onBlur={() => setIsKeyboardOpen(false)}
          />
          <div className="flex justify-center">
            <InfiniteFeaturedArtistList
              preferredState={{
                value: preferred,
                setValue: setPreferred,
              }}
              keyword={input ? input : ""}
              isFocused={isKeyboardOpen}
            />
          </div>
        </div>
      </div>
      {/* 키보드가 올라오면 PreferredSection을 fixed 하단에, 아니면 기존 위치에 */}
      {isKeyboardOpen ? (
        <div
          className=" max-w-md w-full mx-auto"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            padding: "16px",
          }}
        >
          <PreferredSection
            preferredState={{
              value: preferred,
              setValue: setPreferred,
            }}
          />
        </div>
      ) : (
        <div className="sticky bottom-0 bg-grayScaleBlack100 mx-16 pb-60">
          <PreferredSection
            preferredState={{
              value: preferred,
              setValue: setPreferred,
            }}
          />
          <CommonButton
            isActive={true}
            onClick={() => {
              handleSignup({ skip: false });
            }}
            title="가입 완료"
            variant="primary"
          />
        </div>
      )}
      <AuthErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => {
          navigate("/");
          setIsErrorModalOpen(false);
        }}
        title="오류가 발생했어요!"
        description="홈에서 다시 시도해주세요"
      />
    </div>
  );
}

export default SignupPreferArtistPage;
