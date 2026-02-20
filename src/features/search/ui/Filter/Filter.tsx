interface FilterProps {
  label?: string;
  icon?: string;
  onClick?: () => void;
}

export default function Filter({ label, icon, onClick }: FilterProps) {
  return (
    <div className="flex cursor-pointer" onClick={onClick}>
      <div className="text-grayScaleWhite text-Caption1-Bold font-bold font-NotoSansKR mr-4">
        {label}
      </div>
      <img src={icon} />
    </div>
  );
}
