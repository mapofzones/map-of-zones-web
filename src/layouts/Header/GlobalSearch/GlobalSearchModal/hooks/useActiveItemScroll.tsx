import { useEffect, useRef } from 'react';

import { ActiveItem } from '../ActiveItem';

export function useActiveItemScroll(activeItem: ActiveItem) {
  const activeItemRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // console.log('try scroll to activeItemRef: ', activeItemRef.current);

    if (!activeItemRef.current) return;

    // console.log('scroll to activeItemRef: ', activeItemRef.current);
    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [activeItem]);
  return activeItemRef;
}
