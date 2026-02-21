import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGenre } from "../entities/genre/model/useGenre";
import GenreList from "../entities/genre/ui/GenreList";
import useGetUserPreferredGenres from "../features/preference/model/useGetUserPreferredGenres";
import useSetUserPreferredGenres from "../features/preference/model/useSetUserPreferredGenres";
import PreferenceSelectHeader from "../features/preference/ui/PreferenceSelectHeader";
import PreferredSection from "../features/preference/ui/PreferredSection";
import UpdatePreferenceSnackbar from "../features/preference/ui/UpdatePreferenceSnackbar";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import DangerModal from "../shared/ui/DangerModal/DangerModal";
import ListHeader from "../shared/ui/ListHeader";
import ErrorToast from "../shared/ui/Toast/ErrorToast";
import { preferredIdsEqual } from "../features/preference/utils/preferredIdsEqual";
import { genreMap } from "../entities/concert/constants/filterMaps";
import { GenreEnum } from "../entities/genre/types";

function UpdatePreferGenrePage() {
  const navigate = useNavigate();

  const { data: existingPreferredGenres } = useGetUserPreferredGenres();
  const { data: genres, isLoading, error } = useGenre();
  const { mutate: updatePreferredGenres } = useSetUserPreferredGenres();

  const [preferred, setPreferred] = useState<{ id: number; label: string }[]>(
    existingPreferredGenres?.map((genre) => ({
      id: genre.id,
      label: genre.name,
    })) || [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading genres</div>;
  }

  const preferredIds = preferred.map((item) => item.id);
  const existingIds = existingPreferredGenres?.map((item) => item.id) || [];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader
          title="장르 설정"
          onBackClick={() => {
            window.amplitude.track("click_back_preference");
            if (
              preferred.length > 0 &&
              !preferredIdsEqual(preferredIds, existingIds)
            ) {
              setIsModalOpen(true);
            } else {
              navigate(-1);
            }
          }}
        />
        <div className="flex flex-col mx-16 ">
          <div className="py-20">
            <PreferenceSelectHeader
              type="장르"
              count={preferred.length}
              isMyPage={true}
            />
          </div>
          <div className="flex justify-center">
            <GenreList
              genres={genres || []}
              preferredState={{
                value: preferred,
                setValue: setPreferred,
              }}
            />
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-grayScaleBlack100 mx-16 pb-60">
        <div className="pb-10">
          <PreferredSection
            preferredState={{
              value: preferred.map((item) => ({
                id: item.id,
                label: genreMap[item.label as GenreEnum] ?? item.label,
              })),
              setValue: setPreferred,
            }}
          />
        </div>
        <CommonButton
          isActive={preferred.length >= 1}
          onClick={() => {
            updatePreferredGenres(
              preferred.map((genre) => genre.id),
              {
                onSuccess: () => {
                  window.amplitude.track("confirm_change_genre_preference");
                  navigate("/my", {
                    replace: true,
                  });
                  toast(<UpdatePreferenceSnackbar type="장르" />, {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnFocusLoss: false,
                  });
                },
                onError: () => {
                  toast(<ErrorToast message={`장르 설정에 실패했어요`} />, {
                    toastId: "update-preference-error",
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnFocusLoss: false,
                  });
                },
              },
            );
          }}
          title="설정하기"
          variant="primary"
        />
      </div>
      <DangerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          "선택된 장르가 저장되지 않아요.\n이전 상태로 돌아가시나요?" as string
        }
        primaryLabel="뒤로 갈게요"
        secondaryLabel="잘못 눌렀어요"
        onPrimary={() => {
          navigate(-1);
        }}
        onSecondary={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default UpdatePreferGenrePage;
