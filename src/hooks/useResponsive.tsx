import { useState, useEffect } from 'react';

export const useResponsive = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    // Set the initial state
    documentChangeHandler();

    // Add the listener
    mediaQueryList.addEventListener('change', documentChangeHandler);

    // Clean up the listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [mediaQuery]);

  return matches;
};