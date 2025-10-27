import Lottie from "lottie-react";
import CompleteToastIconMotion from "../assets/CompleteToastIconMotion.json";

export default function CompleteToast({ message }: { message: string }) {
  return (
    <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
      <div className="w-24 h-24">
        <Lottie
          animationData={CompleteToastIconMotion}
          loop={false}
          renderer="svg"
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
      </div>
      <span style={{ whiteSpace: "pre-line" }}>{message}</span>
    </div>
  );
}
