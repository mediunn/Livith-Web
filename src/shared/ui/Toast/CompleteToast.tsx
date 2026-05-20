import Lottie from "lottie-react";
import CompleteToastIconMotion from "../../assets/CompleteToastIconMotion.json";
import ToastBase from "./ToastBase";

type CompleteToastProps = {
  message: string;
};

export default function CompleteToast({ message }: CompleteToastProps) {
  return (
    <ToastBase
      message={message}
      icon={
        <Lottie
          animationData={CompleteToastIconMotion}
          loop={false}
          renderer="svg"
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        />
      }
    />
  );
}
