export function isWebView() {
  return (
    !!window.webkit?.messageHandlers?.calendarDateSelected ||
    !!window.Android?.calendarDateSelected
  );
}
