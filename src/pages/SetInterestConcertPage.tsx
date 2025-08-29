import { use, useEffect, useState } from "react";
import ListHeader from "../shared/ui/ListHeader";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import SearchResultCount from "../features/search/ui/SearchResultCount";
import SearchResult from "../features/search/ui/SearchResult";
import RecommendSearch from "../features/search/ui/RecommendSearch";
import { ConcertFilter } from "../entities/concert/types";
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
    <>
      <div className="sticky top-0 z-50">
        <ListHeader title="공연 설정하기" />
        <div className="sticky top-0 z-50 bg-grayScaleBlack100">
          <InputSearchBar
            inputState={{ value: input, setValue: setInput }}
            showAllState={{ value: showAll, setValue: setShowAll }}
            showResultsState={{ value: showResults, setValue: setShowResults }}
          />

          {/* 검색 결과 개수 표시 */}
          {showResults && input && (
            <div className="px-16 py-24 sticky top-[72px] bg-grayScaleBlack100 z-40">
              {/* height만큼 top 값을 줘야 아래에서 겹치지 않음 */}
              <SearchResultCount keyword={input} />
            </div>
          )}
        </div>
      </div>

      {showResults && input ? (
        <>
          <SearchResult
            keyword={input}
            selectedConcertState={{
              value: selectedConcert,
              setValue: setSelectedConcert,
            }}
          />
          {/* 설정 버튼 */}
          <div className="sticky bottom-0 bg-grayScaleBlack100 pt-24 pb-60 z-50  px-16  ">
            <SetInterestConcertButton
              selectedConcertState={{
                value: selectedConcert,
                setValue: setSelectedConcert,
              }}
            />
          </div>
        </>
      ) : (
        <>
          {!input && showAll && (
            <div className="mt-12 h-full">
              <SelectableConcertList
                selectedConcertState={{
                  value: selectedConcert,
                  setValue: setSelectedConcert,
                }}
              />
              {/* 설정 버튼 */}
              <div className="sticky bottom-0 bg-grayScaleBlack100 pt-24 pb-60 z-50  px-16 ">
                <SetInterestConcertButton
                  selectedConcertState={{
                    value: selectedConcert,
                    setValue: setSelectedConcert,
                  }}
                />
              </div>
            </div>
          )}
          {input.trim() && (
            <RecommendSearch
              inputState={{ value: input, setValue: setInput }}
              showResultsState={{
                value: showResults,
                setValue: setShowResults,
              }}
            />
          )}
        </>
      )}
    </>
  );
}
export default SetInterestConcertPage;
