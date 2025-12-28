import { toast } from "react-toastify";
import WarningIcon from "../../../shared/assets/WarningIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import CompleteToast from "../../../shared/ui/CompleteToast";
import { useLogout } from "../model/useLogout";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import ErrorToast from "../../../shared/ui/ErrorToast";
import { AxiosError } from "axios";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const { mutate: logoutMutate } = useLogout();
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = async () => {
    try {
      logoutMutate(undefined, {
        onSuccess: () => {
          toast(<CompleteToast message="로그아웃이 완료되었어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
          localStorage.removeItem("accessToken");
          setUser(null);
          navigate("/");
          queryClient.clear(); // 로그아웃 시 캐시 초기화
        },
        onError: (err) => {
          const axiosErr = err as AxiosError;
          // 401 Unauthorized = RefreshToken 없음/만료된 상태
          if (axiosErr?.response?.status === 401) {
            // RefreshToken이 없어도 결국 로그아웃된 상태이므로 AccessToken 삭제
            localStorage.removeItem("accessToken");
            setUser(null);
            queryClient.clear();

            toast(<CompleteToast message="로그아웃이 완료되었어요" />, {
              position: "top-center",
              autoClose: 3000,
              pauseOnFocusLoss: false,
            });

            navigate("/");
            return;
          }
          toast(<ErrorToast message="로그아웃에 실패했어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
      });
      onClose(); // 모달 닫기
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            onClick={onClose}
            className="max-w-md m-auto fixed inset-0 bg-grayScaleBlack100 z-[70] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            className="fixed z-[71]"
            initial={{ opacity: 0 }}
            // 팝업 열릴 때
            animate={{
              opacity: 1,
              transition: {
                duration: 0.15,
                type: "spring",
                stiffness: 756,
                damping: 48,
                mass: 1,
              },
            }}
            // 팝업 닫힐 때
            exit={{
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            }}
          >
            <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-14">
              <img src={WarningIcon} className="mx-auto mt-20" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR text-center mt-17">
                정말 로그아웃 하시겠어요?
              </p>
              <div className="flex justify-center space-x-14 mt-20 ">
                <button
                  className="flex-1 bg-grayScaleBlack5 text-caution100 text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 "
                  onClick={handleChange}
                >
                  로그아웃 할래요
                </button>
                <button
                  className="flex-1 bg-grayScaleBlack80 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 "
                  onClick={() => {
                    onClose();
                  }}
                >
                  취소할래요
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default LogoutModal;
