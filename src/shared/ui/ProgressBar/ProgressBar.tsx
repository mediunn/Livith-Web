interface ProgressBarProps {
  total: number;
  current: number;
}

function ProgressBar({ total, current }: ProgressBarProps) {
  return (
    <div className="flex gap-5">
      {Array.from({ length: total }).map((_, index) => (
        <div
          className={`h-6 rounded-16 ${index < current ? "bg-mainYellow30" : "bg-grayScaleBlack80"} flex-1`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;
