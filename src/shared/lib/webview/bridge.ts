export function sendSelectedDate(date: string) {
  window.webkit?.messageHandlers?.calendarDateSelected?.postMessage({
    date,
  });
}

export function sendMonthChanged(startDate: string, endDate: string) {
  window.webkit?.messageHandlers?.calendarMonthChanged?.postMessage({
    startDate,
    endDate,
  });
}
