import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGenre } from "../entities/genre/model/useGenre";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import PreferredSection from "../features/preference/ui/PreferredSection";
import GenreList from "../entities/genre/ui/GenreList";
import PreferenceSelectHeader from "../features/preference/ui/PreferenceSelectHeader";
import ProgressBar from "../shared/ui/ProgressBar/ProgressBar";
import ListHeader from "../shared/ui/ListHeader";
import DangerModal from "../shared/ui/DangerModal/DangerModal";

function SetPreferGenrePage() {
  const navigate = useNavigate();
  const [preferred, setPreferred] = useState<{ id: number; label: string }[]>(
    sessionStorage.getItem("preferredGenres")
      ? JSON.parse(sessionStorage.getItem("preferredGenres") || "[]")
      : [],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: genres, isLoading, error } = useGenre();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading genres</div>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader
          title="취향 설정"
          onBackClick={() => {
            if (preferred.length > 0) {
              setIsModalOpen(true);
            } else {
              navigate(-1);
            }
          }}
        />
        <div className="flex flex-col mx-16 ">
          <div className="mt-10 mb-10">
            <ProgressBar total={2} current={1} />
          </div>
          <div className="py-20">
            <PreferenceSelectHeader type="장르" count={preferred.length} />
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
              value: preferred,
              setValue: setPreferred,
            }}
          />
        </div>
        <CommonButton
          isActive={preferred.length >= 1}
          onClick={() => {
            sessionStorage.setItem(
              "preferredGenres",
              JSON.stringify(preferred),
            );
            navigate("/set-prefer-artist", {
              state: {
                preferredGenreIds: preferred.map((genre) => genre.id),
              },
            });
          }}
          title="다음"
          variant="primary"
        />
      </div>
      <DangerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          "선택된 아티스트나 장르가 해제돼요.\n이전 페이지로 돌아가시나요?" as string
        }
        primaryLabel="뒤로 갈게요"
        secondaryLabel="잘못 눌렀어요"
        onPrimary={() => {
          sessionStorage.removeItem("signupPreferredGenres");
          navigate(-1);
        }}
        onSecondary={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default SetPreferGenrePage;
