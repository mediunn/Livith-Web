export function isIOSWebView() {
  return !!window.webkit?.messageHandlers;
}
