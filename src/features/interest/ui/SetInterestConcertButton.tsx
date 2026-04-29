import { useNavigate } from "react-router-dom";
import { StateWithSetter } from "../../../shared/types/props";
import { motion, AnimatePresence } from "framer-motion";
import { useSetInterestConcert } from "../model/useSetInterestConcert";

type SetInterestConcertButtonProps = {
  selectedConcertsState: StateWithSetter<string | null>;
};

export const SetInterestConcertButton = ({
  selectedConcertsState: { value: selectedConcerts },
}: SetInterestConcertButtonProps) => {
  const navigate = useNavigate();
  const mutation = useSetInterestConcert();

  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleSetInterestConcert = async () => {
    if (!selectedConcerts) return;

    mutation.mutate(
      {
        concertIds: selectedConcerts.split(",").map(Number),
        accessToken,
      },
      {
        onSuccess: (data) => {
          const concertData = {
            id: data.id,
            poster: data.poster,
            artist: data.artist,
          };

          navigate("/complete-set", {
            replace: true,
            state: { concert: concertData },
          });
        },
        onError: (err) => console.error(err),
      },
    );
  };

  return (
    <AnimatePresence>
      {selectedConcerts && (
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
      {!selectedConcerts && (
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
