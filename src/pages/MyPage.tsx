import Nickname from "../features/my/ui/Nickname";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";
import { useEffect, useState } from "react";
import LoggedOutMyPage from "./LoggedOutMyPage";

function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className="pb-90">
          <Nickname></Nickname>
          <Info></Info>
          <TabBar />
        </div>
      ) : (
        <LoggedOutMyPage />
      )}
    </>
  );
}

export default MyPage;
