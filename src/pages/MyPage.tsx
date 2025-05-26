import ReportConcert from "../features/ReportConcert";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/Info";

function MyPage() {
  return (
    <div className="pb-64">
      <ReportConcert></ReportConcert>
      <Info></Info>
      <TabBar></TabBar>
    </div>
  );
}

export default MyPage;
