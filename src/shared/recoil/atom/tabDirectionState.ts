import { atom } from "recoil";
import { TabType } from "../../ui/TabBar";

export interface TabDirectionState {
  prevTab: TabType;
  currentTab: TabType;
  direction: 1 | -1; // 인터랙션 슬라이드 방향 (1: 오른쪽, -1: 왼쪽)
}

export const tabDirectionState = atom<TabDirectionState>({
  key: "tabDirectionState",
  default: { prevTab: "home", currentTab: "home", direction: 1 },
});
