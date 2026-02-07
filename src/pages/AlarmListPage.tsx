import ListHeader from "../shared/ui/ListHeader";
import { useNavigate } from "react-router-dom";

function AlarmListPage() {
  const navigate = useNavigate();
  return (
    <div className="pb-90">
      <ListHeader
        title={"알림"}
        rightElement={
          <button
            onClick={() => navigate("/alarm-setting")}
            className="p-8 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR"
          >
            알림 설정
          </button>
        }
      />

      <p className="py-10 px-16 text-grayScaleBlack30 text-Body4-sm font-semibold font-NotoSansKR">
        알림은 90일 이후 순차적으로 삭제돼요.
      </p>
      <div className="flex flex-col px-4 gap-12">
        <div className="p-12 bg-transparent rounded-10">
          <p className="text-grayScaleBlack50 text-Body4-sm font-semibold font-NotoSansKR">
            취향 기반 콘서트 정보가 업데이트됐어요 🎵
          </p>
          <p className="pt-4 pb-10 text-grayScaleBlack50 text-Caption1-re font-regular font-NotoSansKR">
            선택하신 취향과 관련된 콘서트를 확인해 보세요.
          </p>
          <p className="text-grayScaleBlack50 text-Caption2-sm font-semibold font-NotoSansKR">
            5 시간 전
          </p>
        </div>

        <div className="p-12 bg-grayScaleBlack90 rounded-10">
          <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
            선호 아티스트의 콘서트 오픈🔥
          </p>
          <p className="pt-4 pb-10 text-grayScaleBlack30 text-Caption1-re font-regular font-NotoSansKR">
            선호 아티스트 OO의 <br />
            내한 공연 소식이 도착했어요!
          </p>
          <p className="text-grayScaleBlack30 text-Caption2-sm font-semibold font-NotoSansKR">
            5 시간 전
          </p>
        </div>

        <div className="p-12 bg-transparent rounded-10">
          <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
            콘서트 정보가 업데이트됐어요!
          </p>
          <p className="pt-4 pb-10 text-grayScaleBlack30 text-Caption1-re font-regular font-NotoSansKR">
            오아시스 콘서트 공연의 예상 셋리스트가 등록됐어요.
            <br />
            콘서트 가기 전까지 주요 노래를 익혀보아요!
          </p>
          <p className="text-grayScaleBlack30 text-Caption2-sm font-semibold font-NotoSansKR">
            10 시간 전
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlarmListPage;
