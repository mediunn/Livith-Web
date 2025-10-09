import Nickname from "../features/my/ui/Nickname";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";

function MyPage() {
  return (
    <div className="pb-90">
      <Nickname></Nickname>
      <Info></Info>
      <TabBar />
    </div>
  );
}

export default MyPage;
