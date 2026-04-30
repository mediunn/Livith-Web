import { useNavigate } from "react-router-dom";
import { StateWithSetter } from "../../../shared/types/props";
import { motion, AnimatePresence } from "framer-motion";
import { useSetInterestConcert } from "../model/useSetInterestConcert";

type SetInterestConcertButtonProps = {
  selectedConcertsState: StateWithSetter<string | null>;
  isFirst?: boolean;
};

export const SetInterestConcertButton = ({
  selectedConcertsState: { value: selectedConcerts },
  isFirst = false,
}: SetInterestConcertButtonProps) => {
  const navigate = useNavigate();
  const mutation = useSetInterestConcert();

  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleSetInterestConcert = async () => {
    const concertIds =
      selectedConcerts && selectedConcerts.trim()
        ? selectedConcerts
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map(Number)
        : [];

    mutation.mutate(
      {
        concertIds,
        accessToken,
      },
      {
        onSuccess: () => {
          navigate("/", {
            replace: true,
            state: {
              showSetConcertSuccessToast: true,
              toastLabel: isFirst ? "설정" : "변경",
            },
          });
        },
        onError: () => {
          navigate("/", {
            replace: true,
            state: {
              showSetConcertErrorToast: true,
              toastLabel: isFirst ? "설정" : "변경",
            },
          });
        },
      },
    );
  };

  return (
    <AnimatePresence>
      <motion.button
        onClick={handleSetInterestConcert}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeIn" }}
        className="w-full py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR cursor-pointer text-grayScaleBlack100 bg-mainYellow30"
      >
        {isFirst ? "설정하기" : "변경하기"}
      </motion.button>
    </AnimatePresence>
  );
};
