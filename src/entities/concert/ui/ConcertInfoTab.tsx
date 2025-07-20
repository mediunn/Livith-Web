import { useState } from "react";
import ArtistTabPanel from "./ArtistTabPanel";
import EmptyArtistTabPanel from "./EmptyArtistTabPanel";
import ConcertTabPanel from "./ConcertTabPanel";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function ConcertInfoTab() {
  const [selectedTab, setSelectedTab] = useState("artist");

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
          <ArtistTabPanel />
          {/* <EmptyArtistTabPanel /> */}
        </TabPanel>
        <TabPanel value="concert">
          <ConcertTabPanel />
        </TabPanel>
        <TabPanel value="setlist">셋리스트 내용</TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default ConcertInfoTab;
