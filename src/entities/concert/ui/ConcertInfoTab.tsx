import { useState } from "react";
import ArtistTabPanel from "./ArtistTabPanel";
import EmptyArtistTabPanel from "./EmptyArtistTabPanel";
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
        className="h-57 mx-16 px-7 py-6 items-center bg-grayScaleBlack90 border-b border-grayScaleBlack80"
        indicatorProps={{
          className: "bg-mainYellow30 shadow-none",
        }}
      >
        <Tab
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

      <TabsBody>
        <TabPanel value="artist" className="p-0">
          <ArtistTabPanel />
          {/* <EmptyArtistTabPanel /> */}
        </TabPanel>
        <TabPanel value="concert">콘서트 정보 내용</TabPanel>
        <TabPanel value="setlist">셋리스트 내용</TabPanel>
      </TabsBody>
    </Tabs>
  );
}

export default ConcertInfoTab;
