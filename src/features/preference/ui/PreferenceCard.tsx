import { StateWithSetter } from "../../../shared/types/props";

interface PreferenceCardProps {
  id: number;
  label: string;
  imgUrl: string;
  preferredState: StateWithSetter<number[]>;
}

function PreferenceCard({
  id,
  label,
  imgUrl,
  preferredState,
}: PreferenceCardProps) {
  const { value: preferredIndex, setValue: setPreferredIndex } = preferredState;

  const isPreferred = (index: number) => {
    return preferredIndex.includes(index);
  };

  const onClick = () => {
    if (preferredIndex.length >= 3 && !isPreferred(id)) return;
    if (isPreferred(id)) {
      setPreferredIndex(preferredIndex.filter((i) => i !== id));
    } else {
      setPreferredIndex([...preferredIndex, id]);
    }
  };
  return (
    <div
      onClick={onClick}
      className={`w-full relative cursor-pointer aspect-square rounded-6 overflow-hidden border border-1 ${isPreferred(id) ? "border-mainYellow30" : "border-grayScaleBlack100"}`}
    >
      {/* 이미지 */}
      <img
        src={imgUrl}
        alt="Genre"
        className="bg-grayScaleBlack100 opacity-70 "
      />
      <span className="absolute left-0 right-0 bottom-[40%] text-center text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR select-none">
        {label}
      </span>
    </div>
  );
}
export default PreferenceCard;
