import Snackbar from "./Snackbar";

export default function LoginSnackbar({
  message,
  onLoginClick,
}: {
  message: string;
  onLoginClick: () => void;
}) {
  return (
    <Snackbar
      message={`${message}를 3개나 열람하셨네요!\n로그인 후 더 많은 기능을 이용해보세요`}
      onButtonClick={onLoginClick}
      buttonMessage="로그인"
    />
  );
}
