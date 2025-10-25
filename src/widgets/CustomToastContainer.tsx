import { cssTransition, ToastContainer } from "react-toastify";

function CustomToastContainer() {
  return (
    <ToastContainer
      transition={cssTransition({
        enter: "animate-toast-in",
        exit: "animate-toast-out",
        collapse: true,
      })}
      hideProgressBar
      closeButton={false}
      toastClassName="shadow-custom-toast rounded-8 bg-grayScaleBlack80  w-343 mt-[15%] mx-auto z-50"
    />
  );
}

export default CustomToastContainer;
