import { useNavigate } from "react-router-dom";
import { useRecommendConcertListSection } from "../features/concert/model/useRecommendConcertListSection";
import CardListSkeleton from "../shared/ui/CardSkeleton/CardListSkeleton";
import RecommedConcertSlide from "../entities/concert/ui/RecommedConcertSlide";
import ConcertListSectionArrowIcon from "../shared/assets/ConcertListSectionArrowIcon.svg";
import EmptyRecommedConcertSlide from "../features/concert/ui/EmptyRecommedConcertSlide";

interface Props {
  nickname: string;
}

function RecommedConcertListSection({ nickname }: Props) {
  const navigate = useNavigate();

  const { data: concerts = [], isLoading } =
    useRecommendConcertListSection(true);

  if (!concerts.length) return null;

  return (
    <div className="mt-30">
      <div className="flex justify-between items-end pb-20 px-16">
        <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
          {nickname}님의 <br />
          취향이 담긴 콘서트
        </p>
        {concerts.length >= 10 && (
          <img
            src={ConcertListSectionArrowIcon}
            className="w-24 h-24 cursor-pointer"
            onClick={() => navigate("/concerts/recommed")}
          />
        )}
      </div>
      {isLoading ? (
        <div className="mx-16">
          <CardListSkeleton num={3} />
        </div>
      ) : concerts.length === 0 ? (
        <EmptyRecommedConcertSlide />
      ) : (
        <RecommedConcertSlide concerts={concerts} />
      )}
    </div>
  );
}

export default RecommedConcertListSection;
