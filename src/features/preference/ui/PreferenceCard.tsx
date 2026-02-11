import { toast } from "react-toastify";
import { StateWithSetter } from "../../../shared/types/props";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";

interface PreferenceCardProps {
  id: number;
  label: string;
  imgUrl: string;
  preferredState?: StateWithSetter<{ id: number; label: string }[]>;
}

function PreferenceCard({
  id,
  label,
  imgUrl,
  preferredState,
}: PreferenceCardProps) {
  const { value: preferred, setValue: setPreferred } = preferredState ?? {
    value: [],
    setValue: () => {},
  };

  const isPreferred = (id: number) => {
    return preferred.some((item) => item.id === id);
  };

  const onClick = () => {
    if (preferred.length >= 3 && !isPreferred(id)) {
      toast(<ErrorToast message="해제 후 선택해 주세요" />, {
        toastId: "preference-card-error",
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
      return;
    }
    if (isPreferred(id)) {
      setPreferred(preferred.filter((item) => item.id !== id));
    } else {
      setPreferred([...preferred, { id, label }]);
    }
  };
  return (
    <div
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
      className={`w-full relative ${preferredState ? "cursor-pointer" : ""} aspect-square rounded-6 overflow-hidden border border-1 ${isPreferred(id) ? "border-mainYellow30" : "border-grayScaleBlack100"}`}
    >
      {/* 이미지 */}
      <img
        src={imgUrl}
        alt={label}
        className="bg-grayScaleBlack100 opacity-70 "
      />
      <span className="absolute left-0 right-0 bottom-[40%] text-center text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR select-none">
        {label}
      </span>
    </div>
  );
}
export default PreferenceCard;
