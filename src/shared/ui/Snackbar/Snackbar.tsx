interface SnackbarProps {
  message: string;
  onButtonClick: () => void;
  buttonMessage?: string;
}

export default function Snackbar({
  message,
  onButtonClick,
  buttonMessage,
}: SnackbarProps) {
  return (
    <>
      <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
        <p style={{ whiteSpace: "pre-line" }}>{message}</p>
        <button
          onClick={onButtonClick}
          className="absolute top-16 right-16 cursor-pointer text-Caption1-sm font-semibold text-mainYellow30"
        >
          {buttonMessage}
        </button>
      </div>
    </>
  );
}
