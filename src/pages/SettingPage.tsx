import Info from "../features/my/ui/Info";
import ListHeader from "../shared/ui/ListHeader";

function SettingPage() {
  return (
    <div className="pb-90">
      <ListHeader title={"환경설정"} />
      <Info />
    </div>
  );
}

export default SettingPage;
