import { useEffect, useRef } from 'react';

import { ActiveItem } from '../ActiveItem';

export function useActiveItemScroll(activeItem: ActiveItem) {
  const activeItemRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!activeItemRef.current) return;

    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [activeItem]);
  return activeItemRef;
}
