declare global {
  interface Window {
    amplitude: {
      track: (eventName: string, properties?: Record<string, any>) => void;
      setUserProperties?: (properties: Record<string, any>) => void;
    };
  }
}

export {};
