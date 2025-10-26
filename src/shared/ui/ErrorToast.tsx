import ErrorToastIcon from "../assets/ErrorToastIcon.svg";

export default function ErrorToast({ message }: { message: string }) {
  return (
    <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
      <img src={ErrorToastIcon} className="w-24 h-24" />
      <span>{message}</span>
    </div>
  );
}
