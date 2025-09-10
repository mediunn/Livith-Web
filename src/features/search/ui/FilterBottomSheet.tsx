import { useEffect, useRef, useState } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import { GenreFilter, StatusFilter } from "../../../entities/concert/types";
import { StateWithSetter } from "../../../shared/types/props";
import { genreMap } from "../../../entities/concert/constants/filterMaps";
import { statusMap } from "../../../entities/concert/constants/filterMaps";
import { sortFilter } from "../../../features/concert/utils/sortFilter";
import {
  genreOrder,
  statusOrder,
} from "../../../entities/concert/constants/filterOrders";
import { motion, AnimatePresence } from "framer-motion";

interface FilterBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  genreState: StateWithSetter<GenreFilter[]>;
  statusState: StateWithSetter<StatusFilter[]>;
}

function FilterBottomSheet({
  isSheetOpen,
  onSheetClose,
  genreState: { value: genreSelected, setValue: setGenreSelected },
  statusState: { value: statusSelected, setValue: setStatusSelected },
}: FilterBottomSheetProps) {
  const ref = useRef<SheetRef>(null);

  const genres: GenreFilter[] = Object.values(GenreFilter);
  const statuses: StatusFilter[] = Object.values(StatusFilter);

  const [localGenres, setLocalGenres] = useState<GenreFilter[]>(genreSelected);
  const [localStatuses, setLocalStatuses] =
    useState<StatusFilter[]>(statusSelected);

  // 필터 변경 여부 체크
  const isModified =
    localGenres.sort().join() !== [genreSelected].sort().join() ||
    localStatuses.sort().join() !== [statusSelected].sort().join();
  // 초기화 버튼 활성화 여부 (선택된 항목이 없으면 비활성)
  const isResetDisabled =
    localGenres[0] === GenreFilter.ALL && localStatuses[0] === StatusFilter.ALL;

  const [resetAnimating, setResetAnimating] = useState(false);
  const [applyAnimating, setApplyAnimating] = useState(false);

  // 시트 열릴 때 초기값 동기화
  useEffect(() => {
    if (isSheetOpen) {
      setLocalGenres(genreSelected);
      setLocalStatuses(statusSelected);
    }
  }, [isSheetOpen, genreSelected, statusSelected]);

  // 공통 토글 함수
  function toggleOption<T>(
    selected: T[],
    value: T,
    allValue: T,
    setSelected: (newSelected: T[]) => void
  ) {
    let newSelected = [...selected];

    if (value === allValue) {
      newSelected = [allValue];
    } else {
      if (newSelected.includes(value)) {
        newSelected = newSelected.filter((v) => v !== value);
      } else {
        newSelected.push(value);
      }

      // 전체 선택 처리
      if (newSelected.length === 0) newSelected = [allValue];
      if (newSelected.includes(allValue) && newSelected.length > 1)
        newSelected = newSelected.filter((v) => v !== allValue);
    }

    setSelected(newSelected);
  }

  // 초기화
  const handleReset = () => {
    setLocalGenres([GenreFilter.ALL]);
    setLocalStatuses([StatusFilter.ALL]);
  };

  // 적용
  const handleApply = () => {
    setGenreSelected(
      localGenres.length === 0 || localGenres.includes(GenreFilter.ALL)
        ? [GenreFilter.ALL]
        : sortFilter(localGenres, genreOrder)
    );
    setStatusSelected(
      localStatuses.length === 0 || localStatuses.includes(StatusFilter.ALL)
        ? [StatusFilter.ALL]
        : sortFilter(localStatuses, statusOrder)
    );
    onSheetClose();
  };

  return (
    <Sheet isOpen={isSheetOpen} onClose={onSheetClose} ref={ref}>
      <Sheet.Container
        className="!mx-auto !max-w-md !h-fit !bg-grayScaleBlack90 !rounded-t-20 border border-grayScaleBlack80"
        style={{ left: "0", right: "0" }}
      >
        <Sheet.Header className="cursor-pointer" />
        <Sheet.Content className="!px-16 space-y-11 pt-8 pb-24">
          <div className="flex flex-col">
            {/* 장르 */}
            <div className="text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
              장르
            </div>
            <div className="pt-20 pb-30">
              <div className="flex flex-wrap gap-2.5">
                {genres.map((genre, index) => {
                  const isSelected = localGenres.includes(genre);
                  return (
                    <div
                      key={genre}
                      onClick={() =>
                        toggleOption<GenreFilter>(
                          localGenres,
                          genre,
                          GenreFilter.ALL,
                          setLocalGenres
                        )
                      }
                      className={`
                        px-13 py-7 rounded-24 cursor-pointer font-bold font-NotoSansKR text-Caption1-Bold
                        ${
                          isSelected
                            ? "border bg-mainYellow30 text-grayScaleBlack100"
                            : "border border-grayScaleBlack50 text-grayScaleBlack50"
                        }
                      `}
                    >
                      {genreMap[genre]}
                    </div>
                  );
                })}
              </div>
            </div>

            <hr className="border-t border-grayScaleBlack80" />

            {/* 기간 */}
            <div className="pt-30 pb-20 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
              기간
            </div>
            <div className="flex flex-wrap gap-2.5 mb-24">
              {statuses.map((status) => {
                const isSelected = localStatuses.includes(status);
                return (
                  <div
                    key={status}
                    onClick={() =>
                      toggleOption<StatusFilter>(
                        localStatuses,
                        status,
                        StatusFilter.ALL,
                        setLocalStatuses
                      )
                    }
                    className={`
                      px-13 py-7 rounded-24 cursor-pointer font-bold font-NotoSansKR text-Caption1-Bold
                      ${
                        isSelected
                          ? "border bg-mainYellow30 text-grayScaleBlack100"
                          : "border border-grayScaleBlack50 text-grayScaleBlack50"
                      }
                    `}
                  >
                    {statusMap[status]}
                  </div>
                );
              })}
            </div>

            {/* 버튼 */}
            <div className="flex flex-row gap-2.5 justify-center">
              <AnimatePresence>
                {!resetAnimating && (
                  <motion.div
                    key="reset-btn"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={`flex-1 min-w-[120px] py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR text-center whitespace-nowrap cursor-pointer ${
                      isResetDisabled
                        ? "bg-grayScaleBlack80 text-grayScaleBlack50 cursor-not-allowed"
                        : "bg-mainYellow30 text-grayScaleBlack100"
                    }`}
                    onClick={
                      isResetDisabled
                        ? undefined
                        : () => {
                            setResetAnimating(true); // 페이드아웃 시작
                            setTimeout(() => {
                              handleReset(); // 애니메이션 끝난 뒤 실행
                              window.amplitude.track("click_reset_filter");
                              setResetAnimating(false); // 다시 보여주기
                            }, 150);
                          }
                    }
                  >
                    초기화
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!applyAnimating && (
                  <motion.div
                    key="apply-btn"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={`flex-1 min-w-[120px] py-15 rounded-6 text-Body2-sm font-semibold font-NotoSansKR text-center whitespace-nowrap cursor-pointer ${
                      isModified
                        ? "bg-mainYellow30 text-grayScaleBlack100"
                        : "bg-grayScaleBlack80 text-grayScaleBlack50 cursor-not-allowed"
                    }`}
                    onClick={
                      isModified
                        ? () => {
                            setApplyAnimating(true);
                            setTimeout(() => {
                              handleApply();
                              window.amplitude.track("click_apply_filter");
                              localGenres.forEach((genre) => {
                                window.amplitude.track(
                                  `set_filter_${genre.toLowerCase()}`
                                );
                              });
                              localStatuses.forEach((status) => {
                                window.amplitude.track(
                                  `set_filter_${status.toLowerCase()}`
                                );
                              });
                              setApplyAnimating(false);
                            }, 150);
                          }
                        : undefined
                    }
                  >
                    설정하기
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>

      <Sheet.Backdrop
        onTap={onSheetClose}
        className="!max-w-md !mx-auto"
        style={{ left: "0", right: "0" }}
      />
    </Sheet>
  );
}

export default FilterBottomSheet;
