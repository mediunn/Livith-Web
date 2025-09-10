import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MusicTitleBar from "../features/lyric/ui/MusicTitleBar";
import LyricTypeButton from "../features/lyric/ui/LyricTypeButton";
import Lyric from "../entities/lyric/ui/Lyric";
import LyricModal from "../features/lyric/ui/LyricModal";
import { Fanchant, getFanchant } from "../features/lyric/api/getFanchant";
import { useRecoilValue } from "recoil";
import { setlistIdState } from "../entities/recoil/atoms/setlistIdState";
import { BeatLoader } from "react-spinners";
import YouTubePlayer from "../entities/lyric/ui/YouTubePlayer";
import EmptyYouTubePlayer from "../entities/lyric/ui/EmptyYouTubePlayer";
import EmptyConcertInfoTabPanel from "../entities/concert/ui/EmptyConcertInfoTabPanel";
import { getSong, Song } from "../entities/lyric/api/getSong";
import { Sheet, SheetRef } from "react-modal-sheet";

function LyricPage() {
  const { songId } = useParams<{ songId: string }>();
  const sheetRef = useRef<SheetRef>(null);
  const [currentSnap, setCurrentSnap] = useState<number | null>(null);

  // 페이지 진입 시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [songData, setSongData] = useState<Song | null>(null);
  const [isLyricLoading, setIsLyricLoading] = useState(true);

  // 초기값: 원어, 발음, 해석, 응원법 true
  const [activeButtons, setActiveButtons] = useState<boolean[]>([
    true,
    true,
    true,
    true,
  ]);

  // 응원법 존재 확인
  const [hasFanchant, setHasFanchant] = useState(false);
  const setlistId = useRecoilValue(setlistIdState);

  const [fanchantData, setFanchantData] = useState<Fanchant | null>(null);
  const [isFanchantLoading, setIsFanchantLoading] = useState(true);

  useEffect(() => {
    const fetchSongData = async () => {
      setIsLyricLoading(true);
      try {
        const data = await getSong(Number(songId));
        setSongData(data);
      } catch (error) {
        console.error("특정 노래의 가사 정보 조회 API 호출 실패:", error);
      } finally {
        setIsLyricLoading(false);
      }
    };

    fetchSongData();
  }, [songId]);

  useEffect(() => {
    const fetchFanchantExistence = async () => {
      setIsFanchantLoading(true);
      try {
        const fanchantData = await getFanchant(
          Number(setlistId),
          Number(songId)
        );
        const hasAnyFanchant = fanchantData?.fanchant?.some(
          (line) => line.trim() !== ""
        );

        setHasFanchant(hasAnyFanchant);

        setFanchantData(fanchantData);

        // 응원법이 없을 시 응원법 버튼 값 false로 변경
        if (!hasAnyFanchant) {
          setActiveButtons((prev) => {
            const newButtons = [...prev];
            newButtons[3] = false;
            return newButtons;
          });
        }
      } catch (error) {
        console.error("응원법 조회 API 호출 실패:", error);
        setHasFanchant(false);
      } finally {
        setIsFanchantLoading(false);
      }
    };

    if (setlistId !== null && songId) {
      fetchFanchantExistence();
    }
  }, [setlistId, songId]);

  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const showPopup = (message: string) => {
    setPopupMessage(message);
    setIsFadingOut(false);

    const showDuration = 1500; // 딜레이 시간
    const fadeDuration = 1000; // 애니메이션 시간

    setTimeout(() => setIsFadingOut(true), showDuration);
    setTimeout(() => setPopupMessage(null), showDuration + fadeDuration);
  };

  const toggleButton = (index: number) => {
    const newState = [...activeButtons];
    newState[index] = !newState[index];

    const [isLang, isPron, isTrans, isFanChat] = newState;

    // 원어 - off, 발음 - off, 해석 - off - 응원법 - off
    if (!isLang && !isPron && !isTrans && !isFanChat) {
      // 모든 버튼 off 시 팝업
      showPopup("원어, 발음, 해석 중 하나는\n켜져야 해요");
      return;
    }

    // 원어 - off, 발음 - off, 해석 - off - 응원법 - on
    if (!isLang && !isPron && !isTrans && isFanChat) {
      // 모든 버튼 off 시 팝업
      showPopup("원어, 발음, 해석 중 하나는\n켜져야 해요");
      return;
    }

    //  응원법이 존재할 경우에만 다음의 조건 적용
    if (hasFanchant) {
      // 원어 - off, 발음 - off, 해석 - on - 응원법 - on
      if (!isLang && !isPron && isTrans && isFanChat) {
        // 해석과 응원법만 동시에 킬 경우 등장하는 팝업
        showPopup("해석에는 응원법이\n표시가 되지 않아요");
        return;
      }

      // 원어 - off, 발음 - on, 해석 - off - 응원법 - on
      if (!isLang && isPron && !isTrans && isFanChat) {
        // 발음과 응원법만 동시에 킬 경우 등장하는 팝업
        showPopup("발음에는 응원법이\n표시가 되지 않아요");
        return;
      }

      // 원어 - off, 발음 - on, 해석 - on - 응원법 - on
      if (!isLang && isPron && isTrans && isFanChat) {
        // 발음, 해석과 응원법만 동시에 킬 경우 등장하는 팝업
        showPopup("발음과 해석에는 응원법이\n표시가 되지 않아요");
        return;
      }

      if (index === 3 && newState[3]) {
        if (!newState[0]) {
          showPopup("응원법은 원어에서만\n표시가 돼요");
          return;
        }

        // 응원법 버튼을 켜려는 경우이고, 원어도 켜져 있음
        setActiveButtons(newState);
        showPopup("응원법은 원어에서만\n표시가 돼요");
        return;
      }
    }

    setActiveButtons(newState);
  };

  if (isLyricLoading || !songData) {
    return (
      <div className="flex justify-center items-center h-60">
        <BeatLoader
          color="#FFFF97"
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    );
  }

  return (
    <div>
      {isFanchantLoading ? (
        <div className="flex justify-center items-center h-60">
          <BeatLoader
            color="#FFFF97"
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      ) : (
        <>
          <MusicTitleBar songId={Number(songId)} />

          {songData?.youtubeId ? (
            <YouTubePlayer youtubeId={songData.youtubeId} />
          ) : (
            <EmptyYouTubePlayer />
          )}

          <LyricTypeButton
            activeButtons={activeButtons}
            onToggle={toggleButton}
            hasFanchant={hasFanchant}
          />

          <div>
            <Sheet
              isOpen={true}
              onClose={() => {}} // 바텀 시트가 닫히지 않게 빈 함수 전달
              ref={sheetRef}
              snapPoints={[-32, -320, 42]}
              initialSnap={1} // 중간 위치에서 시작
              onSnap={(snapIndex) => {
                const snapPoints = [-32, -320, 42];
                setCurrentSnap(snapPoints[snapIndex]);
              }}
            >
              <Sheet.Container
                className="!mx-auto !max-w-md !bg-grayScaleBlack90 !rounded-t-30"
                style={{
                  left: "0",
                  right: "0",
                }}
              >
                <Sheet.Header className="bg-grayScaleBlack90" />
                <Sheet.Content className="bg-grayScaleBlack90">
                  <Sheet.Scroller draggableAt="top" autoPadding>
                    <div className=" sticky top-0 h-20 w-full bg-gradient-to-b from-grayScaleBlack90 to-transparent z-10" />

                    <div>
                      {fanchantData?.fanchantPoint && (
                        <>
                          <div className="mx-16 mb-20 pb-16">
                            <p className="text-mainYellow30 text-Body4-sm font-semibold font-NotoSansKR">
                              떼창 포인트
                            </p>
                            <p className="pt-4 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
                              {fanchantData.fanchantPoint}
                            </p>
                          </div>
                          <div className="mx-16 h-2 bg-grayScaleBlack80"></div>
                        </>
                      )}

                      {songData ? (
                        <Lyric
                          songData={songData}
                          activeButtons={activeButtons}
                          fanchantData={fanchantData}
                        />
                      ) : (
                        <div className="pt-51">
                          <EmptyConcertInfoTabPanel text="가사 정보" />
                        </div>
                      )}
                    </div>
                  </Sheet.Scroller>
                </Sheet.Content>
              </Sheet.Container>
              <Sheet.Backdrop
                style={{
                  backgroundColor:
                    currentSnap === -32
                      ? "rgba(20, 23, 27, 0.9)"
                      : "transparent",
                }}
              />
            </Sheet>
          </div>
        </>
      )}

      {popupMessage && (
        <LyricModal onClose={() => setPopupMessage(null)}>
          <p
            className="text-center text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR"
            style={{ whiteSpace: "pre-line" }}
          >
            {popupMessage}
          </p>
        </LyricModal>
      )}
    </div>
  );
}

export default LyricPage;
