import { useEffect, useRef } from 'react';

export const useClickOutside = (handleClose: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [handleClose, ref]);

  return { ref };
};
