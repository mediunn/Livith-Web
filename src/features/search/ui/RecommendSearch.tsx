import { useState } from "react";
import { StateWithSetter } from "../../../shared/types/props";
import useRecommendSearch from "../model/useRecommendSearch";
import RecommendSearchItem from "./RecommendSearchItem";
import useDebounce from "../model/useDebounce";

type RecommendSearchProps = StateWithSetter<string>;

function RecommendSearch({
  value: input,
  setValue: setInput,
}: RecommendSearchProps) {
  //debounce 적용
  const [isDebouncing, setIsDebouncing] = useState(false);
  const debounceValue = useDebounce({
    value: input,
    delay: 400,
    setIsDebouncing,
  });

  const isCompleteKorean = (char: string) => {
    const code = char.charCodeAt(0);
    return code >= 0xac00 && code <= 0xd7a3;
  };

  const shouldSearch =
    debounceValue.length > 1 ||
    (debounceValue.length === 1 && isCompleteKorean(debounceValue));

  // 검색어가 2글자 이상이거나, 1글자이고 완전한 한글일 때만 추천 검색어 요청
  const { data: recommendSearch, isLoading } = useRecommendSearch({
    letter: debounceValue,
    enabled: shouldSearch, // 이 조건을 만족할 때만 요청
  });

  // 검색어가 없거나 로딩 중일 때는 추천 검색어를 보여주지 않음
  if (!debounceValue || isLoading || isDebouncing) {
    return null;
  }

  return (
    <div className="mt-24 mx-16">
      {recommendSearch?.map((word, index) => (
        <RecommendSearchItem key={index} word={word} />
      ))}
    </div>
  );
}

export default RecommendSearch;
