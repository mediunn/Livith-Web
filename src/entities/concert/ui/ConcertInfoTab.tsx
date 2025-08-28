import { useEffect, useState } from "react";
import { getArtistInfo, Artist } from "../api/getArtistInfo";
import { getConcertCulture, ConcertCulture } from "../api/getConcertCulture";
import { getSchedule, Schedule } from "../api/getSchedule";
import {
  getConcertRequiredInfo,
  ConcertRequired,
} from "../api/getConcertRequiredInfo";
import { getMd, Md } from "../api/getMd";
import ArtistTabPanel from "./ArtistTabPanel";
import ConcertTabPanel from "./ConcertTabPanel";
import SetlistTabPanel from "./SetlistTabPanel";
import EmptyConcertInfoTabPanel from "./EmptyConcertInfoTabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { getSetlistInfo, Setlist } from "../api/getSetlistInfo";

interface ConcertInfoTabProps {
  concertId: number;
  ticketUrl: string;
  introduction: string;
}

const TAB_KEY = `selectedTab`;

function ConcertInfoTab({
  concertId,
  ticketUrl,
  introduction,
}: ConcertInfoTabProps) {
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

  const [artist, setArtist] = useState<Artist | null>(null);
  const [ConcertCulture, setConcertCulture] = useState<ConcertCulture[]>([]);
  const [schedules, setSchedule] = useState<Schedule[] | null>(null);
  const [concertRequiredInfo, setConcertRequiredInfo] = useState<
    ConcertRequired[] | null
  >(null);
  const [mds, setMd] = useState<Md[] | null>(null);
  const [setlist, setSetlist] = useState<Setlist[] | null>(null);

  useEffect(() => {
    if (!concertId || isNaN(concertId)) {
      // 유효하지 않은 concertId면 API 호출 안 함
      return;
    }
    async function fetchConcert() {
      try {
        const data = await getArtistInfo(concertId);
        setArtist(data);
      } catch (error) {
        console.error("특정 콘서트의 가수 정보 조회 API 호출 실패", error);
      }
    }
    fetchConcert();
  }, [concertId]);

  useEffect(() => {
    const fetchConcertCulture = async () => {
      try {
        const data = await getConcertCulture(concertId);
        setConcertCulture(data);
      } catch (error) {
        console.error("특정 콘서트 공연 문화 목록 조회 API 호출 실패:", error);
      }
    };

    fetchConcertCulture();
  }, [concertId]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const data = await getSchedule(concertId);
        setSchedule(data);
      } catch (error) {
        console.error("특정 콘서트 일정 목록 조회 API 호출 실패:", error);
        setSchedule([]);
      }
    };

    fetchSchedule();
  }, [concertId]);

  useEffect(() => {
    const fetchConcertRequiredInfo = async () => {
      try {
        const data = await getConcertRequiredInfo(concertId);
        setConcertRequiredInfo(data);
      } catch (error) {
        console.error("특정 콘서트 필수 정보 목록 조회 API 호출 실패:", error);
        setConcertRequiredInfo([]);
      }
    };

    fetchConcertRequiredInfo();
  }, [concertId]);

  useEffect(() => {
    const fetchMds = async () => {
      try {
        const data = await getMd(concertId);
        setMd(data);
      } catch (error) {
        console.error("특정 콘서트의 MD 목록 조회 API 호출 실패:", error);
        setMd([]);
      }
    };

    fetchMds();
  }, [concertId]);

  useEffect(() => {
    const fetchSetlist = async () => {
      try {
        const data = await getSetlistInfo(concertId);
        setSetlist(data);
      } catch (error) {
        console.error("특정 콘서트의 셋리스트 목록 조회 API 호출 실패:", error);
        setSetlist([]);
      }
    };

    fetchSetlist();
  }, [concertId]);

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
              sx={{
                "& .MuiTab-root": {
                  flex: 1,
                  height: "64px",
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: '"NotoSansKR", sans-serif',
                  letterSpacing: "-0.05em",
                  lineHeight: "1.4",
                  textTransform: "none",
                  color: "#808794",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#FFFFFF",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#FFFFFF",
                },
              }}
            >
              <Tab label="가수 정보" value="1" />
              <Tab label="콘서트 정보" value="2" />
              <Tab label="셋리스트" value="3" />
            </TabList>
          </Box>
          <TabPanel
            value="1"
            sx={{
              padding: "0",
            }}
          >
            {!artist && ConcertCulture.length === 0 ? (
              <EmptyConcertInfoTabPanel text={"가수 정보"} />
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
                concertCulture={ConcertCulture}
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
              <EmptyConcertInfoTabPanel text={"콘서트 정보"} />
            ) : (
              <ConcertTabPanel
                concertId={concertId}
                ticketUrl={ticketUrl}
                schedules={schedules}
                concertRequiredInfo={concertRequiredInfo}
                mds={mds}
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
              <EmptyConcertInfoTabPanel text={"셋리스트"} />
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default ConcertInfoTab;
