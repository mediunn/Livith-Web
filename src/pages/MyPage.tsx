import Layout from "../shared/ui/Layout";
import ReportConcert from "../features/ReportConcert";
import TabBar from "../shared/ui/TabBar";
import Info from "../features/Info";

function MyPage() {
  return (
    <Layout>
      <ReportConcert></ReportConcert>
      <Info></Info>
      <TabBar></TabBar>
    </Layout>
  );
}

export default MyPage;
