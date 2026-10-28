import { useEffect, useState } from "react";

export default function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage full or blocked (private mode); the app still works, it just won't persist
    }
  }, [key, value]);

  return [value, setValue];
}