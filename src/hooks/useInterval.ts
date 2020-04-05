import { useEffect, useState } from "react";

export const useInterval = (
  startImmediate: boolean,
  duration: number,
  callback: () => void
) => {
  const [count, updateCount] = useState(0);
  const [intervalState, setIntervalState] = useState(
    startImmediate === undefined ? true : startImmediate
  );
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalState) {
      const intervalId = setInterval(() => {
        updateCount(count + 1);
        callback && callback();
      }, duration);
      setIntervalId(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, [intervalState, count]);
  return {
    intervalId,
    start: () => {
      setIntervalState(true);
    },
    stop: () => {
      setIntervalState(false);
    },
  };
};
