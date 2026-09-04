export function sendSelectedDate(date: string) {
  if (window.webkit?.messageHandlers?.calendarDateSelected) {
    window.webkit.messageHandlers.calendarDateSelected.postMessage({
      date,
    });
    return;
  }

  window.Android?.calendarDateSelected?.(date);
}

export function sendMonthChanged(startDate: string, endDate: string) {
  if (window.webkit?.messageHandlers?.calendarMonthChanged) {
    window.webkit.messageHandlers.calendarMonthChanged.postMessage({
      startDate,
      endDate,
    });
    return;
  }

  window.Android?.calendarMonthChanged?.(startDate, endDate);
}
