import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export interface ConcertTabItem {
  label: React.ReactNode;
  value: string;
  onClick?: () => void;
}

interface ConcertTabListProps {
  tabs: ConcertTabItem[];
  value: string;
  onChange: (_: React.SyntheticEvent, value: string) => void;
  stickyTop?: number;
  scrollable?: boolean;
  minWidth?: string;
}

function ConcertTabList({
  tabs,
  value,
  onChange,
  stickyTop,
  scrollable = false,
  minWidth = "106px",
}: ConcertTabListProps) {
  return (
    <Box
      sx={{
        position: stickyTop !== undefined ? "sticky" : "static",
        top: stickyTop,
        zIndex: stickyTop ? 60 : "auto",
        backgroundColor: "#14171B",
        borderBottom: 2,
        borderColor: "#222831",
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        variant={scrollable ? "scrollable" : "standard"}
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
            minWidth,
          },
          "& .MuiTab-root.Mui-selected": {
            color: "#FFFFFF",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            disableRipple
            onClick={tab.onClick}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default ConcertTabList;
