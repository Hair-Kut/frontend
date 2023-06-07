import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getInferenceStatus } from 'src/api';

const DELAY_SEC = 5000;

function useInferenceCheck(start: boolean, id: number) {
  const callbackRef = useRef<() => Promise<void>>(async () => {});
  const [status, setStatus] = useState(-1);
  const isInferenceFinished = useMemo(() => status === 200, [status]);

  const callback = useCallback(async () => {
    const newStatus = await getInferenceStatus(id);
    setStatus(newStatus);
  }, [setStatus, id]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => callbackRef.current();
    if (start && !isInferenceFinished) {
      const interval = setInterval(tick, DELAY_SEC);
      console.log('hihi', isInferenceFinished);
      return () => {
        clearInterval(interval);
      };
    }
  }, [start, isInferenceFinished]);

  return isInferenceFinished;
}

export default useInferenceCheck;
