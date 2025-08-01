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
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { getSetlistInfo, Setlist } from "../api/getSetlistInfo";

interface ConcertInfoTabProps {
  concertId: number;
  ticketUrl: string;
}

function ConcertInfoTab({ concertId, ticketUrl }: ConcertInfoTabProps) {
  const [selectedTab, setSelectedTab] = useState("artist");

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
    <Tabs value={selectedTab} className="pt-16">
      <TabsHeader
        {...({} as any)}
        className="h-57 mx-16 px-7 py-6 items-center bg-grayScaleBlack90 border-b border-grayScaleBlack80"
        indicatorProps={{
          className: "bg-mainYellow30 shadow-none",
        }}
      >
        <Tab
          {...({} as any)}
          value="artist"
          className="h-41"
          onClick={() => setSelectedTab("artist")}
        >
          <p
            className={`${
              selectedTab === "artist"
                ? "text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR"
                : "text-grayScaleBlack5 text-body-lgs font-regular font-NotoSansKR"
            }`}
          >
            가수 정보
          </p>
        </Tab>

        <Tab
          {...({} as any)}
          value="concert"
          className="h-41"
          onClick={() => setSelectedTab("concert")}
        >
          <p
            className={`${
              selectedTab === "concert"
                ? "text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR"
                : "text-grayScaleBlack5 text-body-lgs font-regular font-NotoSansKR"
            }`}
          >
            콘서트 정보
          </p>
        </Tab>

        <Tab
          {...({} as any)}
          value="setlist"
          className="h-41"
          onClick={() => setSelectedTab("setlist")}
        >
          <p
            className={`${
              selectedTab === "setlist"
                ? "text-grayScaleBlack100 text-body-sm font-semibold font-NotoSansKR"
                : "text-grayScaleBlack5 text-body-lgs font-regular font-NotoSansKR"
            }`}
          >
            셋리스트
          </p>
        </Tab>
      </TabsHeader>

      <TabsBody {...({} as any)}>
        <TabPanel value="artist" className="p-0">
          {!artist && ConcertCulture.length === 0 ? (
            <EmptyConcertInfoTabPanel text={"가수 정보"} />
          ) : (
            <ArtistTabPanel
              concertId={concertId}
              artist={artist?.artist || ""}
              birthDate={artist?.birthDate || ""}
              birthPlace={artist?.birthPlace || ""}
              category={artist?.category || ""}
              detail={artist?.detail || ""}
              instagramUrl={artist?.instagramUrl || ""}
              keywords={artist?.keywords || []}
              imgUrl={artist?.imgUrl || ""}
              concertCulture={ConcertCulture}
            />
          )}
        </TabPanel>
        <TabPanel value="concert" className="p-0">
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
        <TabPanel value="setlist" className="p-0">
          {setlist && setlist.length > 0 ? (
            <SetlistTabPanel setlist={setlist} concertId={concertId} />
          ) : (
            <EmptyConcertInfoTabPanel text={"셋리스트"} />
          )}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default ConcertInfoTab;
