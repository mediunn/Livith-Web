export function sendSelectedDate(date: string) {
  window.webkit?.messageHandlers?.calendarDateSelected?.postMessage({
    date,
  });
}

export function sendMonthChanged(year: number, month: number) {
  window.webkit?.messageHandlers?.calendarMonthChanged?.postMessage({
    year,
    month,
  });
}
