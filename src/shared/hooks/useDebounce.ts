import { useEffect, useState } from "react";

interface UseDebounceProps {
  value: string;
  delay: number;
  setIsDebouncing: (value: boolean) => void;
}
function useDebounce({ value, delay, setIsDebouncing }: UseDebounceProps) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    setIsDebouncing(true);
    const timer = setTimeout(() => {
      setDebounceValue(value);
      setIsDebouncing(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debounceValue;
}

export default useDebounce;
