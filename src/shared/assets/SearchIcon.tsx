const SearchIcon = ({ color = "white", width = 38, height = 38 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M22 22L30 30"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export default SearchIcon;
