import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../shared/assets/BackArrow.svg";

function BackArrow() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 이전 페이지가 없으면 홈으로 이동
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <img src={BackArrowIcon} className="cursor-pointer" onClick={handleClick} />
  );
}

export default BackArrow;
