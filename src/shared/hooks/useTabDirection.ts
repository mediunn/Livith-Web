import { useRecoilState } from "recoil";
import { TabType } from "../ui/TabBar";
import { tabDirectionState } from "../recoil/atom/tabDirectionState";

const TAB_ORDER: Record<TabType, number> = { home: 0, category: 1, my: 2 };

export function useTabDirection() {
  const [state, setState] = useRecoilState(tabDirectionState);

  const updateDirection = (newTab: TabType) => {
    if (newTab === state.currentTab) return;

    // 인터랙션 슬라이드 방향 결정: 현재 탭보다 순서가 크면 오른쪽(1), 작으면 왼쪽(-1)
    const dir: 1 | -1 =
      TAB_ORDER[newTab] >= TAB_ORDER[state.currentTab] ? 1 : -1;
    setState({ prevTab: state.currentTab, currentTab: newTab, direction: dir });
  };

  return {
    direction: state.direction,
    currentTab: state.currentTab,
    updateDirection,
  };
}
