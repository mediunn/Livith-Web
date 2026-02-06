import { useRecommendConcertListSection } from "../features/concert/model/useRecommendConcertListSection";
import CardListSkeleton from "../shared/ui/CardSkeleton/CardListSkeleton";
import RecommedConcertSlide from "../entities/concert/ui/RecommedConcertSlide";

interface Props {
  nickname: string;
}

function RecommedConcertListSection({ nickname }: Props) {
  const { data: concerts = [], isLoading } =
    useRecommendConcertListSection(true);

  if (!concerts.length) return null;

  return (
    <div className="mt-30">
      <p className="mb-20 ml-16 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
        {nickname}님의 <br />
        취향이 담긴 콘서트
      </p>

      {isLoading ? (
        <div className="mx-16">
          <CardListSkeleton num={3} />
        </div>
      ) : (
        <RecommedConcertSlide concerts={concerts} />
      )}
    </div>
  );
}

export default RecommedConcertListSection;
