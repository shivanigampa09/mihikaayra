import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      const attemptScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!attemptScroll()) {
        const t1 = setTimeout(attemptScroll, 100);
        const t2 = setTimeout(attemptScroll, 300);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname, hash]);

  return null;
};
