export function isSetlistWebView(): boolean {
  return typeof window.webkit?.messageHandlers?.setlistWebView?.postMessage === "function";
}

export function sendNativeHeader(title: string): boolean {
  const handler = window.webkit?.messageHandlers?.setlistNativeHeader;
  if (!handler) return false;
  try {
    handler.postMessage({ title: title.slice(0, 500) });
    return true;
  } catch {
    return false;
  }
}

export function sendNativeNavigation(message: { type: "openSong"; songId: number; songTitle: string }): boolean {
  const handler = window.webkit?.messageHandlers?.setlistNativeNavigation;
  if (!handler) return false;
  try {
    handler.postMessage(message);
    return true;
  } catch {
    return false;
  }
}

export type SetlistInteraction =
  | { type: "onSongTap" | "onSetlistReportTap" | "onSongReportTap" }
  | {
      type: "onOriginalToggle" | "onPronunciationToggle" | "onTranslationToggle" | "onCheerToggle";
      isOn: boolean;
    };

const webEventNames = {
  onSongTap: "click_song_cell",
  onSetlistReportTap: "click_report_setlist",
  onSongReportTap: "click_report_song",
  onOriginalToggle: "toggle_original",
  onPronunciationToggle: "toggle_pronunciation",
  onTranslationToggle: "toggle_translation",
  onCheerToggle: "toggle_cheer",
} as const;

export function trackSetlistInteraction(interaction: SetlistInteraction): void {
  if (isSetlistWebView()) {
    try {
      window.webkit!.messageHandlers!.setlistWebView.postMessage(interaction);
    } catch {
      // Analytics delivery must not interrupt navigation or toggle interactions.
    }
    return;
  }

  const eventName = webEventNames[interaction.type];
  window.amplitude?.track(
    "isOn" in interaction ? `${eventName}_${interaction.isOn ? "on" : "off"}` : eventName,
  );
}
