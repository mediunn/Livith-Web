declare global {
  interface Window {
    amplitude: { track: (eventName: string) => void };
  }
}
export {};
