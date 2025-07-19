import ReportConcert from "../features/my/ui/ReportConcert";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/my/ui/Info";

function MyPage() {
  return (
    <div className="pb-90">
      <ReportConcert></ReportConcert>
      <Info></Info>
      <TabBar></TabBar>
    </div>
  );
}

export default MyPage;
