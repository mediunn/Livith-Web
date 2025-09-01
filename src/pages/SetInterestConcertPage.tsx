import { use, useEffect, useState } from "react";
import ListHeader from "../shared/ui/ListHeader";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import SearchResultCount from "../features/search/ui/SearchResultCount";
import SearchResult from "../features/search/ui/SearchResult";
import RecommendSearch from "../features/search/ui/RecommendSearch";
import SelectableConcertList from "../features/interest/ui/SelectableConcertList";
import { SetInterestConcertButton } from "../features/interest/ui/SetInterestConcertButton";

function SetInterestConcertPage() {
  const [input, setInput] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(true);
  // 검색 결과를 보여줄지 여부
  const [showResults, setShowResults] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState<string | null>(null);

  useEffect(() => {
    if (!showAll && !showResults) {
      setSelectedConcert(null);
    }
  }, [showAll, showResults]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 상단 헤더 */}
      <div className="sticky top-0 z-50">
        <ListHeader title="공연 설정하기" />
        <div className="sticky top-0 z-50 bg-grayScaleBlack100">
          <InputSearchBar
            inputState={{ value: input, setValue: setInput }}
            showAllState={{ value: showAll, setValue: setShowAll }}
            showResultsState={{ value: showResults, setValue: setShowResults }}
          />

          {showResults && input && (
            <div className="px-16 py-24 sticky top-[72px] bg-grayScaleBlack100 z-40">
              <SearchResultCount keyword={input} />
            </div>
          )}
        </div>
      </div>

      {/* 리스트 영역: 스크롤 가능 */}
      <div className="flex-1 overflow-auto px-16 mt-12">
        {showResults && input ? (
          <SearchResult
            keyword={input}
            selectedConcertState={{
              value: selectedConcert,
              setValue: setSelectedConcert,
            }}
          />
        ) : !input && showAll ? (
          <SelectableConcertList
            selectedConcertState={{
              value: selectedConcert,
              setValue: setSelectedConcert,
            }}
          />
        ) : (
          input.trim() && (
            <RecommendSearch
              inputState={{ value: input, setValue: setInput }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )
        )}
      </div>

      {/* 버튼: 항상 화면 맨 아래 */}
      <div className="sticky bottom-0 bg-grayScaleBlack100 pt-24 pb-60 z-50 px-16">
        <SetInterestConcertButton
          selectedConcertState={{
            value: selectedConcert,
            setValue: setSelectedConcert,
          }}
        />
      </div>
    </div>
  );
}
export default SetInterestConcertPage;
