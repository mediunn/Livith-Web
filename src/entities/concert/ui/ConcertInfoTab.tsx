import { useEffect, useState } from "react";
import { getArtistInfo, Artist } from "../api/getArtistInfo";
import ArtistTabPanel from "./ArtistTabPanel";
import ConcertTabPanel from "./ConcertTabPanel";
import EmptyConcertInfoTabPanel from "./EmptyConcertInfoTabPanel";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

interface Props {
  concertId: number;
}

function ConcertInfoTab({ concertId }: Props) {
  const [selectedTab, setSelectedTab] = useState("artist");
  const [artist, setArtist] = useState<Artist | null>(null);

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
          {artist ? (
            <ArtistTabPanel
              concertId={concertId}
              artist={artist.artist}
              birthDate={artist.birthDate}
              birthPlace={artist.birthPlace}
              category={artist.category}
              detail={artist.detail}
              instagramUrl={artist.instagramUrl}
              keywords={artist.keywords}
              imgUrl={artist.imgUrl}
            />
          ) : (
            <EmptyConcertInfoTabPanel text={"가수 정보"} />
          )}
        </TabPanel>
        <TabPanel value="concert" className="p-0">
          <ConcertTabPanel />
          {/* <EmptyConcertInfoTabPanel text={"콘서트 정보"} /> */}
        </TabPanel>
        <TabPanel value="setlist">셋리스트 내용</TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default ConcertInfoTab;
