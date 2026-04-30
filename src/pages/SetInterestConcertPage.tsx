import { useEffect, useState } from "react";
import { ConcertScheduleType } from "../entities/concert/types";
import { useInterestConcerts } from "../features/interest/model/useInterestConcerts";
import SelectableConcertList from "../features/interest/ui/SelectableConcertList";
import SelectedSection from "../features/interest/ui/SelectedSection";
import { SetInterestConcertButton } from "../features/interest/ui/SetInterestConcertButton";
import InputSearchBar from "../features/search/ui/InputSearchBar";
import SearchResult from "../features/interest/ui/SearchResult";
import ListHeader from "../shared/ui/ListHeader";

export type SelectedConcert = {
  id: string;
  title: string;
};

const toSelectedIds = (concerts: SelectedConcert[]) =>
  concerts
    .map((concert) => concert.id)
    .filter(Boolean)
    .sort()
    .join(",");

function SetInterestConcertPage() {
  const [input, setInput] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [showResults, setShowResults] = useState(false);
  const [selectedConcerts, setSelectedConcerts] = useState<SelectedConcert[]>(
    [],
  );

  const { data: interestList, isFetching: isInterestFetching } =
    useInterestConcerts({
      sort: ConcertScheduleType.CONCERT,
    });
  const isFirst = !interestList || interestList.length === 0;
  const savedSelectedIds = toSelectedIds(
    interestList?.map((concert) => ({
      id: concert.id,
      title: concert.title,
    })) ?? [],
  );
  const currentSelectedIds = toSelectedIds(selectedConcerts);
  const isSelectionChanged = currentSelectedIds !== savedSelectedIds;

  const title = isFirst ? "공연 설정" : "공연 변경";

  useEffect(() => {
    if (isInterestFetching) return;

    if (interestList && interestList.length > 0) {
      setSelectedConcerts(
        interestList.map((it) => ({ id: it.id, title: it.title })),
      );
    }
  }, [interestList, isInterestFetching]);

  useEffect(() => {
    if (!showAll && !showResults) {
      setSelectedConcerts([]);
    }
  }, [showAll, showResults]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 상단 헤더 */}
      <div className="sticky top-0 z-50">
        <ListHeader title={title} />
        <div className="sticky top-0 z-50 bg-grayScaleBlack100 px-16">
          {!isInputFocused && (
            <div className="flex py-20">
              <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-8">
                소식을 받을 콘서트를 <br /> 선택해 주세요
              </div>
              <div className="flex flex-1 justify-end">
                <span className="text-Body4-md text-grayScaleBlack50 font-medium font-NotoSansKR">
                  {selectedConcerts.length}개 선택
                </span>
              </div>
            </div>
          )}
          <InputSearchBar
            inputState={{ value: input, setValue: setInput }}
            showAllState={{ value: showAll, setValue: setShowAll }}
            showResultsState={{
              value: showResults,
              setValue: setShowResults,
            }}
            placeholder="찾고 있는 콘서트나 가수를 검색하세요"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </div>
      </div>
      {/* 리스트 영역: 스크롤 가능 */}
      <div className="flex-1 overflow-auto mt-12">
        {showResults && input ? (
          // 검색 결과 보여주기
          <SearchResult
            keyword={input}
            selectedConcertsState={{
              value: selectedConcerts,
              setValue: setSelectedConcerts,
            }}
          />
        ) : !input && showAll ? (
          // 전체 리스트 보여주기
          <SelectableConcertList
            selectedConcertsState={{
              value: selectedConcerts,
              setValue: setSelectedConcerts,
            }}
          />
        ) : null}
      </div>
      {/* 버튼: 항상 화면 맨 아래 */}
      <div className="sticky bottom-0 bg-gradient-to-t from-grayScaleBlack100 to-transparent pt-24 pb-60 z-50 px-16">
        {/* 선택된 공연 칩 */}
        <SelectedSection
          selectedState={{
            value: selectedConcerts,
            setValue: setSelectedConcerts,
          }}
        />
        {/* 버튼 */}
        <SetInterestConcertButton
          selectedConcertsState={{
            value: currentSelectedIds || null,
            setValue: (action) => {
              const idString =
                typeof action === "function"
                  ? action(currentSelectedIds || null)
                  : action;

              if (!idString) {
                setSelectedConcerts([]);
                return;
              }

              const ids = idString
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean);
              setSelectedConcerts((prev) => {
                const updated = ids.map((id) => {
                  const existing = prev.find((c) => c.id === id);
                  return existing || { id, title: "" };
                });
                return updated;
              });
            },
          }}
          isFirst={isFirst}
          disabled={!isSelectionChanged}
        />
      </div>
    </div>
  );
}

export default SetInterestConcertPage;
