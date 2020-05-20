import { useEffect, useState, useMemo, useCallback } from 'react';

const useHashLocation = () => {
  const [hashPath, setHashPath] = useState(null);
  const [event, setEvent] = useState(null);

  const dispatch = useCallback(
    (e) => {
      e.preventDefault();
      window.location.hash = e.target.hash;
      window.dispatchEvent(event);
    },
    [event]
  );

  useEffect(() => {
    const pushStateEvent = new window.Event('pushHistoryState');
    setEvent(pushStateEvent);
    const callback = (e) => {
      const { hash } = e.target.location;
      setHashPath(hash);
    };

    const { hash: initialHashPath } = window.location;
    setHashPath(initialHashPath || '#about');

    window.addEventListener('pushHistoryState', callback, false);

    return () => {
      window.removeEventListener('pushHistoryState', callback, false);
    };
  }, []);

  return [hashPath, dispatch];
};

export default useHashLocation;