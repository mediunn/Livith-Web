import { useState } from "react";
import ArtistTabPanel from "./ArtistTabPanel";
import ConcertTabPanel from "./ConcertTabPanel";
import SetlistTabPanel from "./SetlistTabPanel";
import EmptyConcertInfoTabPanel from "./EmptyConcertInfoTabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useSchedule } from "../model/useSchedule";
import { useConcertCulture } from "../model/useConcertCulture";
import { useConcertRequiredInfo } from "../model/useConcertRequiredInfo";
import { useMd } from "../model/useMd";
import { useArtistInfo } from "../model/useArtistInfo";
import { useSetlist } from "../model/useSetlist";
import CommentInputBar from "../../../features/concert/ui/CommentInputBar";
import CommentTabPanel from "./CommentTabPanel";
import { useConcertComment } from "../model/useConcertComment";
import { useRecoilValue } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";

interface ConcertInfoTabProps {
  concertId: number;
  ticketUrl: string;
  introduction: string;
  status: string;
}

const TAB_KEY = `selectedTab`;

function ConcertInfoTab({
  concertId,
  ticketUrl,
  introduction,
  status,
}: ConcertInfoTabProps) {
  const user = useRecoilValue(userState);

  const size = 15; // 페이지당 항목 수
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useConcertComment({ concertId, size });

  const getInitialTab = () => {
    const storedTab = localStorage.getItem(`${TAB_KEY}-${concertId}`);
    return storedTab === "1" || storedTab === "2" || storedTab === "3"
      ? storedTab
      : "1";
  };

  const [tabValue, setTabValue] = useState<string>(getInitialTab);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
    localStorage.setItem(`${TAB_KEY}-${concertId}`, newValue);
  };

  const { data: artist } = useArtistInfo(concertId);

  const { data: concertCulture = [] } = useConcertCulture(concertId);

  const { data: schedules = [] } = useSchedule(concertId);

  const { data: concertRequiredInfo = [] } = useConcertRequiredInfo(concertId);

  const { data: mds = [] } = useMd(concertId);

  const { data: setlist = [] } = useSetlist(concertId);
  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TabContext value={tabValue}>
          <Box
            sx={{
              position: "sticky",
              top: 66, // ListHeader 높이
              zIndex: 60,
              backgroundColor: "#14171B",
              borderBottom: 2,
              borderColor: "#222831",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="tab"
              variant="scrollable"
              scrollButtons={false}
              sx={{
                "& .MuiTab-root": {
                  height: "64px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: '"NotoSansKR", sans-serif',
                  letterSpacing: "-0.05em",
                  lineHeight: "1.4",
                  textTransform: "none",
                  color: "#808794",
                  flexShrink: 0,
                  minWidth: "106px",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FFFFFF",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FFFFFF",
                },
              }}
            >
              <Tab
                label="아티스트 상세"
                value="1"
                disableRipple
                onClick={() => {
                  window.amplitude.track("click_artist_detail_segment");
                }}
              />
              <Tab
                label="콘서트 상세"
                value="2"
                disableRipple
                onClick={() => {
                  window.amplitude.track("click_concert_detail_segment");
                }}
              />
              <Tab
                label="셋리스트"
                value="3"
                disableRipple
                onClick={() => {
                  window.amplitude.track("click_setlist_segment_detail");
                }}
              />
              <Tab
                label={
                  <div className="flex">
                    <p>소통·댓글</p>
                    <p className="pl-2 text-mainYellow30 text-Body2-sm font-semibold font-NotoSansKR">
                      {data?.totalCount ?? 0}
                    </p>
                  </div>
                }
                value="4"
                disableRipple
              />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              padding: "0",
            }}
          >
            {!artist && concertCulture.length === 0 ? (
              <EmptyConcertInfoTabPanel text={"아티스트 상세가 없어요"} />
            ) : (
              <ArtistTabPanel
                introduction={introduction}
                concertId={concertId}
                artist={artist?.artist || ""}
                debutDate={artist?.debutDate || ""}
                category={artist?.category || ""}
                detail={artist?.detail || ""}
                instagramUrl={artist?.instagramUrl || ""}
                keywords={artist?.keywords || []}
                imgUrl={artist?.imgUrl || ""}
                concertCulture={concertCulture}
              />
            )}
          </TabPanel>
          <TabPanel
            value="2"
            sx={{
              padding: "0",
            }}
          >
            {(!schedules || schedules.length === 0) &&
            (!concertRequiredInfo || concertRequiredInfo.length === 0) &&
            (!mds || mds.length === 0) ? (
              <EmptyConcertInfoTabPanel text={"콘서트 상세가 없어요"} />
            ) : (
              <ConcertTabPanel
                concertId={concertId}
                ticketUrl={ticketUrl}
                schedules={schedules}
                concertRequiredInfo={concertRequiredInfo}
                mds={mds}
                status={status}
              />
            )}
          </TabPanel>
          <TabPanel
            value="3"
            sx={{
              padding: "0",
            }}
          >
            {setlist && setlist.length > 0 ? (
              <SetlistTabPanel setlist={setlist} concertId={concertId} />
            ) : (
              <EmptyConcertInfoTabPanel text={"셋리스트가 없어요"} />
            )}
          </TabPanel>

          <TabPanel
            value="4"
            sx={{
              padding: "0",
            }}
          >
            <div>
              <div className="flex pt-24 px-16">
                <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR">
                  모든 댓글
                </p>
                <p className="pl-4 text-mainYellow30 text-Body1-sm font-semibold font-NotoSansKR">
                  {data?.totalCount ?? 0}
                </p>
              </div>
              {data?.totalCount === 0 ? (
                <EmptyConcertInfoTabPanel text={"첫 댓글을 달아보세요!"} />
              ) : (
                <CommentTabPanel
                  comments={data?.pages ?? []}
                  fetchNextPage={fetchNextPage}
                  hasNextPage={hasNextPage}
                  isFetchingNextPage={isFetchingNextPage}
                  myUserId={user?.id ?? 0}
                />
              )}

              <CommentInputBar concertId={concertId} />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default ConcertInfoTab;
