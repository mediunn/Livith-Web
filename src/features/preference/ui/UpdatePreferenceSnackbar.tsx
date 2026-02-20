import Snackbar from "../../../shared/ui/Snackbar/Snackbar";

function UpdatePreferenceSnackbar({ type }: { type: "장르" | "아티스트" }) {
  return (
    <Snackbar
      message={`선호 ${type}를 설정했어요!\n홈에서 확인해 볼까요?`}
      buttonMessage="홈으로 이동"
      onButtonClick={() => (window.location.href = "/")}
    />
  );
}
export default UpdatePreferenceSnackbar;
