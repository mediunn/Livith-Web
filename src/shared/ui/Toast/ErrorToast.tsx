import ErrorToastIcon from "../../assets/ErrorToastIcon.svg";
import ToastBase from "./ToastBase";

export default function ErrorToast({ message }: { message: string }) {
  return (
    <ToastBase
      message={message}
      icon={<img src={ErrorToastIcon} className="w-24 h-24" />}
    />
  );
}
