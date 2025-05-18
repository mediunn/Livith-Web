import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../shared/assets/BackArrow.svg";

function BackArrow() {
  const navigate = useNavigate();
  return (
    <img
      src={BackArrowIcon}
      className="cursor-pointer"
      onClick={() => navigate(-1)}
    />
  );
}

export default BackArrow;
