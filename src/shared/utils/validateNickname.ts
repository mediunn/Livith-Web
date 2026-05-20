interface validateNicknameProps {
  isValid: boolean;
  message: string;
}

export function validateNickname(nickname: string): validateNicknameProps {
  if (
    !/^[a-zA-Z0-9가-힣]+$/.test(nickname) ||
    nickname.length > 10 ||
    /\s/.test(nickname)
  ) {
    return { isValid: false, message: "닉네임 형식이 올바르지 않아요" };
  }

  return { isValid: true, message: "" }; // 유효
}
