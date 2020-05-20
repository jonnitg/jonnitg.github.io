import { useEffect, useRef } from 'react';

const useSectionObserver = (ref, options = {}) => {
  const observer = useRef(null);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          window.history.pushState({}, '', `#${entry.target.id}`);
        }
      }, options);
    }
  }, []);

  useEffect(() => {
    if (observer !== null) {
      const { current: currentObserver } = observer;
      if (ref !== null) {
        currentObserver.observe(ref.current);
      }
      return () => {
        currentObserver.unobserve(ref.current);
        currentObserver.disconnect();
      };
    }

    return () => {};
  }, [observer]);
};

export default useSectionObserver;
