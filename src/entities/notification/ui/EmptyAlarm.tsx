import { useNavigate } from "react-router-dom";
import EmptyIcon from "../../../shared/assets/EmptyIcon.svg";

type EmptyAlarmProps = {
  text: string;
  isLoggedIn: boolean;
};

function EmptyAlarm({ text, isLoggedIn }: EmptyAlarmProps) {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <img src={EmptyIcon} />
      <p className="mt-16 text-grayScaleBlack80 text-Body2-md font-medium font-NotoSansKR text-center whitespace-pre-line">
        {text}
      </p>

      {!isLoggedIn && (
        <button
          onClick={() => navigate("/my")}
          className="mt-20 px-12 py-10 bg-grayScaleBlack50 rounded-8 text-grayScaleBlack30 text-Body4-sm font-semibold font-NotoSansKR"
        >
          회원가입하러 가기
        </button>
      )}
    </div>
  );
}

export default EmptyAlarm;
