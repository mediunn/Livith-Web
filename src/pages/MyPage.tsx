import ReportConcert from "../features/ReportConcert";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/Info";

function MyPage() {
  return (
    <>
      <ReportConcert></ReportConcert>
      <Info></Info>
      <TabBar></TabBar>
    </>
  );
}

export default MyPage;
