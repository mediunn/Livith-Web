const CheckBox = ({ checkColor = "", boxColor = "" }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="24" height="24" rx="4" fill={boxColor} />
      <path
        d="M7.5 12.5L11 16L17.5 9.5"
        stroke={checkColor}
        stroke-width="1.5"
      />
    </svg>
  );
};

export default CheckBox;
