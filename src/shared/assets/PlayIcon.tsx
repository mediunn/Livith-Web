interface PlayIconProps {
  iconColor?: string;
  iconBackgroundColor?: string;
  className?: string;
  size?: number;
}

function PlayIcon({
  iconColor = "#FFFF97",
  iconBackgroundColor = "#14171B",
  className = "",
  size = 32,
}: PlayIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0.5" width="32" height="32" rx="16" fill={iconBackgroundColor} />
      <path d="M24.5 16L12.5 22.9282L12.5 9.0718L24.5 16Z" fill={iconColor} />
    </svg>
  );
}

export default PlayIcon;
