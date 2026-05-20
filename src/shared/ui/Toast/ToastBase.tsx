type ToastBaseProps = {
  icon: React.ReactNode;
  message: string;
};

function ToastBase({ icon, message }: ToastBaseProps) {
  return (
    <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
      <div className="w-24 h-24 flex-shrink-0">{icon}</div>
      <span style={{ whiteSpace: "pre-line" }}>{message}</span>
    </div>
  );
}
export default ToastBase;
