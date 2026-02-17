import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "../../features/auth/api/getUserInfo";
import { userState } from "../lib/recoil/atoms/userState";
import { authReadyState } from "../lib/recoil/atoms/authReadyState";

export function useInitializeAuth() {
  const setUser = useSetRecoilState(userState);
  const setAuthReady = useSetRecoilState(authReadyState);

  const initialize = async () => {
    try {
      const res = await getUserInfo();
      setUser(res.data);
    } catch {
      // 401일 경우 axios 인터셉터가 알아서 refresh 처리함
      setUser(null);
    } finally {
      setAuthReady(true); // 성공/실패 무관하게 초기화 완료 표시
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return { initialize };
}
