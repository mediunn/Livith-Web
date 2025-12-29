import Nickname from "../features/my/ui/Nickname";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";
import { useEffect, useState } from "react";
import LoggedOutMyPage from "./LoggedOutMyPage";
import { useRecoilValue } from "recoil";
import { userState } from "../shared/lib/recoil/atoms/userState";

function MyPage() {
  const user = useRecoilValue(userState); // 유저 정보 읽기
  const isLoggedIn = !!user; // 유저 정보가 있으면 로그인 상태
  if (user === undefined) return <div>로딩 중...</div>; // 초기화 대기

  return (
    <div className="pb-90">
      {isLoggedIn ? (
        <>
          <Nickname></Nickname>
          <Info></Info>
          <TabBar />
        </>
      ) : (
        <LoggedOutMyPage />
      )}
    </div>
  );
}

export default MyPage;
