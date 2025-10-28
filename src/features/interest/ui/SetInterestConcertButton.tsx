import { useNavigate } from "react-router-dom";
import { StateWithSetter } from "../../../shared/types/props";
import { motion, AnimatePresence } from "framer-motion";
import { setInterestConcert } from "../../../entities/concert/api/setInterestConcert";

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
  const token = localStorage.getItem("accessToken") ?? "";

  const handleSetInterestConcert = async () => {
    if (!selectedConcert) return;

    try {
      await setInterestConcert(Number(selectedConcert), token);

      navigate("/complete-set", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {selectedConcert && (
        <motion.button
          onClick={handleSetInterestConcert}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeIn" }}
          className="w-full py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR cursor-pointer text-grayScaleBlack100 bg-mainYellow30"
        >
          설정하기
        </motion.button>
      )}
      {!selectedConcert && (
        <button
          disabled
          className="w-full py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR text-grayScaleBlack30 bg-grayScaleBlack50 cursor-not-allowed"
        >
          설정하기
        </button>
      )}
    </AnimatePresence>
  );
};
