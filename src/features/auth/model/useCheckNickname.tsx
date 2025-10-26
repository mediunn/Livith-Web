import { useQuery } from "@tanstack/react-query";
import { checkNickname } from "../api/checkNickname";

export function useCheckNickname(nickname: string) {
  return useQuery({
    queryKey: ["checkNickname", nickname], // 닉네임 포함
    queryFn: () => checkNickname(nickname),
    enabled: false, // 수동 실행
    select: (data) => data.data,
    gcTime: 0, // 캐시 저장 안 함
  });
}
