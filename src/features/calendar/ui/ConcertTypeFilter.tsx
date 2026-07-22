import { ConcertType } from "../model/types";

interface Props {
  value: ConcertType;
  onChange: (value: ConcertType) => void;
}

export function ConcertTypeFilter({ value, onChange }: Props) {
  return (
    <div className="flex rounded-24 bg-grayScaleBlack90">
      <button
        type="button"
        onClick={() => onChange(ConcertType.ALL)}
        className={[
          "rounded-20 px-12 py-6 text-Caption1-Bold font-bold transition-all duration-200",
          value === ConcertType.ALL
            ? "bg-grayScaleBlack30 text-grayScaleBlack90"
            : "bg-transparent text-grayScaleBlack50",
        ].join(" ")}
      >
        전체 공연
      </button>

      <button
        type="button"
        onClick={() => onChange(ConcertType.INTEREST)}
        className={[
          "rounded-20 px-12 py-6 text-Caption1-Bold font-bold transition-all duration-200",
          value === ConcertType.INTEREST
            ? "bg-grayScaleBlack30 text-grayScaleBlack90"
            : "bg-transparent text-grayScaleBlack50",
        ].join(" ")}
      >
        내 공연
      </button>
    </div>
  );
}
