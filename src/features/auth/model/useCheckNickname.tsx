import { useQuery } from "@tanstack/react-query";
import { checkNickname } from "../api/checkNickname";

export function useCheckNickname(nickname: string) {
  return useQuery({
    queryKey: ["checkNickname", nickname],
    queryFn: () => checkNickname(nickname),
    enabled: false, // 처음엔 실행 안 함
    select: (data) => data.data,
  });
}
