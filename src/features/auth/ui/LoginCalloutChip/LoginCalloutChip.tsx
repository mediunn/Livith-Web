import CalloutChip from "../../../../shared/assets/CalloutChip.svg";
function LoginCalloutChip() {
  const recentLogin = localStorage.getItem("recentLogin");
  return (
    <div className="relative flex justify-center">
      <img src={CalloutChip} className="mx-[20%] mb-20" />
      {recentLogin ? (
        <p className="absolute top-7  text-grayScaleBlack50 text-Caption1-Bold font-bold">
          <span className="text-grayScaleWhite">{recentLogin}</span>로 최근에
          로그인 했어요
        </p>
      ) : (
        <p className="absolute top-7  text-grayScaleBlack50 text-Caption1-Bold font-bold">
          회원가입하고{" "}
          <span className="text-grayScaleWhite">모든 서비스 이용</span>해보세요!
        </p>
      )}
    </div>
  );
}

export default LoginCalloutChip;
