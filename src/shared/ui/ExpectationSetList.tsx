import EmptySetList from "./EmptySetList";

function ExpectationSetList() {
  return (
    <div className="w-375 ml-16">
      <p className="text-grayScaleWhite text-body-lg font-semibold font-NotoSansKR mt-25 mb-14">
        예상 셋리스트
      </p>
      <EmptySetList status={"expectation"}></EmptySetList>
    </div>
  );
}

export default ExpectationSetList;
