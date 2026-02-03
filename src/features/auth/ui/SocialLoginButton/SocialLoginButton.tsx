import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import AuthErrorModal from "../AuthErrorModal";
import { useInitializeAuth } from "../../../../shared/hooks/useInitializeAuth";
import ErrorToast from "../../../../shared/ui/Toast/ErrorToast";
import { API_BASE_URL } from "../../../../shared/api/constants";

interface SocialLoginButtonProps {
  provider: "apple" | "kakao";
  icon: string;
  bgColor: string;
  textColor: string;
  label: string;
  recentLoginLabel: string;
  group?: "A" | "B" | "C";
  onClickLogin?: () => void;
}

const SocialLoginButton = ({
  provider,
  icon,
  bgColor,
  textColor,
  label,
  recentLoginLabel,
  group,
  onClickLogin,
}: SocialLoginButtonProps) => {
  const navigate = useNavigate();
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const popupWidth = 400;
  const popupHeight = 600;
  const left = window.screenX + (window.innerWidth - popupWidth) / 2;
  const top = window.screenY + (window.innerHeight - popupHeight) / 2;

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const { initialize } = useInitializeAuth();

  const handleLogin = () => {
    const popup = window.open(
      `${API_BASE_URL}/auth/${provider}/web`,
      `${provider}Login`,
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},scrollbars=no`,
    );

    const listener = async (event: MessageEvent) => {
      if (event.origin !== SERVER_URL) return;

      const payload = event.data;

      if (payload.error) {
        if (payload.error === "탈퇴 후 7일이 지나지 않았어요.") {
          setIsErrorModalOpen(true);
          popup?.close();
          window.removeEventListener("message", listener);
        } else {
          toast(<ErrorToast message="로그인에 실패했어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        }
        return;
      }

      if (payload.isNewUser) {
        if (group) {
          window.amplitude.track(`${group}_signUp`);
          localStorage.setItem("signedUpViaHomePage", "true");
        }

        sessionStorage.setItem("isAdChecked", "false");
        sessionStorage.setItem("isUseChecked", "false");
        sessionStorage.setItem("isPersonalChecked", "false");
        sessionStorage.setItem("signupPreferredGenres", "[]");

        navigate("/signup/agreement", {
          state: { tempUserData: payload.tempUserData },
        });
      } else {
        localStorage.setItem("accessToken", payload.accessToken);
        localStorage.setItem("recentLogin", recentLoginLabel);

        await initialize();
        navigate("/");
      }

      popup?.close();
      onClickLogin?.();
      window.removeEventListener("message", listener);
    };

    window.addEventListener("message", listener);
  };

  return (
    <>
      <button
        onClick={handleLogin}
        className={`relative flex items-center justify-center h-52 rounded-6 w-full ${bgColor}`}
      >
        <img src={icon} className="absolute left-20" />
        <p className={`${textColor} text-Body3-md font-NotoSansKR font-medium`}>
          {label}
        </p>
      </button>

      <AuthErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => {
          onClickLogin?.();
          navigate("/");
          setIsErrorModalOpen(false);
        }}
        title="탈퇴 후 7일이 지나지 않았어요"
        description="7일이 지난 후 다시 시도해주세요"
      />
    </>
  );
};

export default SocialLoginButton;
