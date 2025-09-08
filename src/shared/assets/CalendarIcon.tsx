const CalendarIcon = ({ color = "#DBDCDF" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.9668"
        y="6.23352"
        width="14.0667"
        height="10.3333"
        stroke={color}
      />
      <path
        d="M3 9.53351H10H17"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12.7998 7.66684V3.9335" stroke={color} />
      <path d="M7.2002 7.66684V3.9335" stroke={color} />
    </svg>
  );
};

export default CalendarIcon;
