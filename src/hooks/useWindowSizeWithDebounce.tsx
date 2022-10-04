import { useEffect, useState } from 'react';

import { debounce } from 'utils/timer';

export function useWindowSizeWithDebounce(debounceTime: number) {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const withDebounce = debounce(
      () => setWindowSize({ height: window.innerHeight, width: window.innerWidth }),
      debounceTime
    );

    window.addEventListener('resize', withDebounce);

    return () => {
      window.removeEventListener('resize', withDebounce);
    };
  }, [debounceTime]);
  return { windowSize };
}
