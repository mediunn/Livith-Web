import Layout from "../shared/ui/Layout";
import MusicTitleBar from "../features/MusicTitleBar";
import LyricTypeButton from "../features/LyricTypeButton";

function LyricPage() {
  return (
    <Layout>
      <MusicTitleBar></MusicTitleBar>
      <LyricTypeButton></LyricTypeButton>
    </Layout>
  );
}

export default LyricPage;
