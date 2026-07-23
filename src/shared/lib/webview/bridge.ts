export function sendSelectedDate(date: string) {
  window.webkit?.messageHandlers?.calendarDateSelected?.postMessage({
    date,
  });
}
