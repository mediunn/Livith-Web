import SearchBar from "../shared/ui/SearchBar";
import TabBar from "../shared/ui/TabBar";

function CategoryPage() {
  return (
    <div className="pb-64">
      <SearchBar></SearchBar>

      <p
        className={`text-grayScaleWhite text-caption-smd font-semibold font-NotoSansKR`}
      >
        카테고리^^
      </p>
      <TabBar></TabBar>
    </div>
  );
}

export default CategoryPage;
