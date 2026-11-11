import { afterEach, describe, expect, it, vi } from "vitest";
import { sendNativeHeader, sendNativeNavigation } from "./setlistBridge";

afterEach(() => vi.unstubAllGlobals());

describe("sendNativeHeader", () => {
  it("keeps the web header when the app does not support a native header", () => {
    vi.stubGlobal("window", { webkit: { messageHandlers: { setlistNativeNavigation: { postMessage: vi.fn() } } } });
    expect(sendNativeHeader("제목")).toBe(false);
  });

  it("sends the title to an app that supports a native header", () => {
    const postMessage = vi.fn();
    vi.stubGlobal("window", { webkit: { messageHandlers: { setlistNativeHeader: { postMessage } } } });
    expect(sendNativeHeader("노래 제목")).toBe(true);
    expect(postMessage).toHaveBeenCalledWith({ title: "노래 제목" });
  });

  it("keeps the web header when message delivery fails", () => {
    const postMessage = () => { throw new Error("unavailable"); };
    vi.stubGlobal("window", { webkit: { messageHandlers: { setlistNativeHeader: { postMessage } } } });
    expect(sendNativeHeader("제목")).toBe(false);
  });
});

describe("sendNativeNavigation", () => {
  it("returns false when native navigation is unavailable", () => {
    vi.stubGlobal("window", {});
    expect(sendNativeNavigation({ type: "openSong", songId: 12, songTitle: "노래" })).toBe(false);
  });

  it("sends the selected song to a supporting app", () => {
    const postMessage = vi.fn();
    vi.stubGlobal("window", { webkit: { messageHandlers: { setlistNativeNavigation: { postMessage } } } });
    expect(sendNativeNavigation({ type: "openSong", songId: 12, songTitle: "노래" })).toBe(true);
    expect(postMessage).toHaveBeenCalledWith({ type: "openSong", songId: 12, songTitle: "노래" });
  });

  it("returns false when message delivery fails", () => {
    const postMessage = () => { throw new Error("unavailable"); };
    vi.stubGlobal("window", { webkit: { messageHandlers: { setlistNativeNavigation: { postMessage } } } });
    expect(sendNativeNavigation({ type: "openSong", songId: 12, songTitle: "노래" })).toBe(false);
  });
});
