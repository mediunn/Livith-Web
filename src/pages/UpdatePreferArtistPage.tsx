import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InfiniteFeaturedArtistList from "../entities/featured-artist/ui/InfiniteFeaturedArtistList";
import useGetUserPreferredArtists from "../features/preference/model/useGetUserPreferredArtists";
import useSetUserPreferredArtists from "../features/preference/model/useSetUserPreferredArtists";
import PreferenceSelectHeader from "../features/preference/ui/PreferenceSelectHeader";
import PreferredSection from "../features/preference/ui/PreferredSection";
import UpdatePreferenceSnackbar from "../features/preference/ui/UpdatePreferenceSnackbar";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import DangerModal from "../shared/ui/DangerModal/DangerModal";
import ListHeader from "../shared/ui/ListHeader";
import ErrorToast from "../shared/ui/Toast/ErrorToast";
import { preferredIdsEqual } from "../features/preference/utils/preferredIdsEqual";

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

  const { data: existingPreferredArtists } = useGetUserPreferredArtists();
  const { mutate: setPreferredArtistsMutate } = useSetUserPreferredArtists();

  const [preferred, setPreferred] = useState<{ id: number; label: string }[]>(
    existingPreferredArtists?.map((artist) => ({
      id: artist.id,
      label: artist.name,
    })) || [],
  );
  const hasExistingArtists =
    existingPreferredArtists && existingPreferredArtists.length > 0;
  const preferredIds = preferred.map((item) => item.id);
  const existingIds = existingPreferredArtists?.map((item) => item.id) || [];

  const label = hasExistingArtists ? "변경" : "설정";

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
          toast(<ErrorToast message={`아티스트 ${label}에 실패했어요`} />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
      },
    );
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <div className="flex">
          <ListHeader
            title={`아티스트 ${label}`}
            onBackClick={() => {
              if (
                preferred.length > 0 &&
                !preferredIdsEqual(preferredIds, existingIds)
              ) {
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
                isMyPage={true}
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
            isActive={preferred.length >= 1}
            onClick={() => {
              handleSetPreference();
            }}
            title={`${label}하기`}
            variant="primary"
          />
        </div>
      )}
      <DangerModal
        isOpen={isBackModalOpen}
        onClose={() => setIsBackModalOpen(false)}
        title={
          "선택된 아티스트가 저장되지 않아요.\n이전 페이지로 돌아가시나요?" as string
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
