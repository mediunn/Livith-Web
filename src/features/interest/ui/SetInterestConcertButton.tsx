import { useNavigate } from "react-router-dom";
import { StateWithSetter } from "../../../shared/types/props";

type SetInterestConcertButtonProps = {
  selectedConcertState: StateWithSetter<string | null>;
};

export const SetInterestConcertButton = ({
  selectedConcertState: {
    value: selectedConcert,
    setValue: setSelectedConcert,
  },
}: SetInterestConcertButtonProps) => {
  const navigate = useNavigate();
  const STORAGE_KEY = "InterestConcertId";

  const handleSetInterestConcert = () => {
    if (selectedConcert) {
      localStorage.setItem(STORAGE_KEY, selectedConcert);
      navigate("/complete-set", { replace: true });
    }
  };

  return (
    <button
      onClick={handleSetInterestConcert}
      disabled={!selectedConcert}
      className={`w-full py-15 rounded-6 text-body-md font-medium font-NotoSansKR 
 ${selectedConcert ? "cursor-pointer text-grayScaleBlack100 bg-mainYellow30 " : "text-grayScaleBlack30 bg-grayScaleBlack50"}`}
    >
      설정하기
    </button>
  );
};
