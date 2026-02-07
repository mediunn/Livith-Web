import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InfiniteFeaturedArtistList from "../entities/featured-artist/ui/InfiniteFeaturedArtistList";
import AuthErrorModal from "../features/auth/ui/AuthErrorModal";
import useSetUserPreferredArtists from "../features/preference/model/useSetUserPreferredArtists";
import PreferenceSelectHeader from "../features/preference/ui/PreferenceSelectHeader";
import PreferredSection from "../features/preference/ui/PreferredSection";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import DangerModal from "../shared/ui/DangerModal/DangerModal";
import ListHeader from "../shared/ui/ListHeader";
import CompleteToast from "../shared/ui/Toast/CompleteToast";
import UpdatePreferenceSnackbar from "../features/preference/ui/UpdatePreferenceSnackbar";

function UpdatePreferArtistPage() {
  // 키보드 오픈 상태 관리
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(true);
  // 검색 결과를 보여줄지 여부
  const [showResults, setShowResults] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isBackModalOpen, setIsBackModalOpen] = useState(false);

  const { data: existingPreferredArtists } = useSetUserPreferredArtists();
  const { mutate: setPreferredArtistsMutate } = useSetUserPreferredArtists();

  const [preferred, setPreferred] = useState<{ id: number; label: string }[]>(
    existingPreferredArtists?.map((artist) => ({
      id: artist.id,
      label: artist.name,
    })) || [],
  );

  const onSuccess = async () => {
    navigate("/my");
    toast(<UpdatePreferenceSnackbar type="아티스트" />, {
      position: "top-center",
      autoClose: 3000,
      pauseOnFocusLoss: false,
    });
  };

  const handleSetPreference = () => {
    setPreferredArtistsMutate(
      preferred.map((item) => item.id),
      {
        onSuccess: async () => {
          try {
            await onSuccess();
          } catch (error) {
            setIsErrorModalOpen(true);
          }
        },
        onError: () => {
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
            title="취향 설정"
            onBackClick={() => {
              if (preferred.length > 0) {
                setIsBackModalOpen(true);
              } else {
                navigate(-1);
              }
            }}
          />
        </div>
        <div className="flex flex-col mx-16 ">
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
              handleSetPreference();
            }}
            title="취향 선택 완료"
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
      <DangerModal
        isOpen={isBackModalOpen}
        onClose={() => setIsBackModalOpen(false)}
        title={
          "선택된 아티스트나 장르가 해제돼요.\n이전 페이지로 돌아가시나요?" as string
        }
        primaryLabel="뒤로 갈게요"
        secondaryLabel="잘못 눌렀어요"
        onPrimary={() => {
          navigate(-1);
        }}
        onSecondary={() => setIsBackModalOpen(false)}
      />
    </div>
  );
}

export default UpdatePreferArtistPage;
