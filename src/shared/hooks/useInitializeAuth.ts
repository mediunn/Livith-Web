import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "../../features/auth/api/getUserInfo";
import { userState } from "../../entities/recoil/atoms/userState";

export function useInitializeAuth() {
  const setUser = useSetRecoilState(userState);

  const initialize = async () => {
    try {
      const res = await getUserInfo();
      setUser(res.data);
    } catch {
      // 401일 경우 axios 인터셉터가 알아서 refresh 처리함
      setUser(null);
    }
  };

  useEffect(() => {
    initialize();
  }, [setUser]);

  return { initialize };
}
