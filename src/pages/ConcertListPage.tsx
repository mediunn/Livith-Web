import BackArrow from "../shared/assets/BackArrow.svg";
import ConcertList from "../features/concert/ui/ConcertList";
import { ConcertStatus } from "../entities/concert/types";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function ConcertListPage() {
  const navigate = useNavigate();
  const { status } = useParams();

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const concertStatus =
    status === ConcertStatus.COMPLETED
      ? "한 달 이내 진행했던 콘서트 목록"
      : ConcertStatus.ONGOING
        ? "현재 진행하는 콘서트 목록"
        : "곧 진행하는 콘서트 목록";
  return (
    <div>
      {/* 헤더 */}
      <div className="flex pt-20 pl-16 pb-2 pr-16">
        <div className="flex items-center">
          <button className="bg-transparent border-none cursor-pointer">
            <img
              src={BackArrow}
              className="w-full h-full"
              onClick={() => navigate(-1)}
            />
          </button>
          <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-6.5 mb-6.5 mr-80 ml-4">
            {concertStatus}
          </p>
        </div>
      </div>
      <ConcertList status={status as ConcertStatus} />
    </div>
  );
}

export default ConcertListPage;
