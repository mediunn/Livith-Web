interface ChipBadgeProps {
  label: string;
  icon?: string;
}

export function ChipBadge({ label, icon }: ChipBadgeProps) {
  return (
    <div className="inline-flex items-center px-8 py-2 bg-lyricsTranslation rounded-24">
      <img src={icon} className="w-24 h-24" />
      <p className="text-grayScaleBlack100 text-Caption2-sm font-semibold font-NotoSansKR">
        {label}
      </p>
    </div>
  );
}
