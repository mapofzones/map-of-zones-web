import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    function handleChange() {
      setMatches(getMatches(query));
    }

    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export function useMobileMediaQuery() {
  return useMediaQuery('(max-width: 375px');
}

export function useTabletSmallMediaQuery() {
  return useMediaQuery('(max-width: 630px)');
}

// eslint-disable-next-line sort-exports/sort-exports
export function useTabletMediumMediaQuery() {
  return useMediaQuery('(max-width: 880px)');
}

// eslint-disable-next-line sort-exports/sort-exports
export function useLaptopMediumMediaQuery() {
  return useMediaQuery('(max-width: 1280px)');
}

// eslint-disable-next-line sort-exports/sort-exports
export function useLaptopLargeMediaQuery() {
  return useMediaQuery('(max-width: 1440px)');
}
