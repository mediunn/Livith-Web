export default function LoginPromptToast({
  message,
  onLoginClick,
}: {
  message: string;
  onLoginClick: () => void;
}) {
  return (
    <>
      <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
        <p>
          {`${message}를 3개나 열람하셨네요!`} <br />
          로그인 후 더 많은 기능을 이용해보세요
        </p>
        <button
          onClick={onLoginClick}
          className="absolute top-16 right-16 cursor-pointer text-Caption1-sm font-semibold text-mainYellow30"
        >
          로그인
        </button>
      </div>
    </>
  );
}
