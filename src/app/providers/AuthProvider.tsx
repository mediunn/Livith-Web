import { useResetRecoilState } from "recoil";
import { useEffect } from "react";
import { userState } from "../../shared/lib/recoil/atoms/userState";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const resetUser = useResetRecoilState(userState);

  useEffect(() => {
    const handleAuthExpired = () => {
      resetUser();
    };

    window.addEventListener("auth:expired", handleAuthExpired);

    return () => {
      window.removeEventListener("auth:expired", handleAuthExpired);
    };
  }, [resetUser]);

  return children;
}
