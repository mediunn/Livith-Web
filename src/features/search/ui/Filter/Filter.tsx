interface FilterProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
}

export default function Filter({
  label,
  icon,
  onClick,
  className,
}: FilterProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center cursor-pointer
        text-grayScaleWhite text-Caption1-Bold font-bold font-NotoSansKR
        ${className ?? ""}
      `}
    >
      <div className="mr-4">{label}</div>
      <img src={icon} />
    </div>
  );
}
