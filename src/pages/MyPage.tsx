import Nickname from "../features/my/ui/Nickname";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";
import { useEffect, useState } from "react";
import LoggedOutMyPage from "./LoggedOutMyPage";

function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  //임시로 로그인 상태 false로 설정
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // setIsLoggedIn(!!token);
    setIsLoggedIn(false);
  }, []);

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
