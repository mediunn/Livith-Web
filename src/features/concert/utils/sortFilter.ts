export function sortFilter<T>(arr: T[], order: T[]) {
  return [...arr].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}
