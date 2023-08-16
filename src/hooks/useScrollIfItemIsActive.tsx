import { useEffect, useRef } from 'react';

export function useScrollIfItemIsActive<T extends HTMLElement>(isActive: boolean) {
  const activeItemRef = useRef<T>(null);

  useEffect(() => {
    if (!activeItemRef.current || !isActive) return;

    activeItemRef.current.scrollIntoView({
      block: 'center',
    });
  }, [isActive]);

  return activeItemRef;
}
