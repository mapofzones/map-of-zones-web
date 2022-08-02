import { useRef, useState } from 'react';

import { useOutsideClick } from './useOutsideClick';

export function useComponentVisible<T extends HTMLElement>(initialVisibility: boolean) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const ref = useRef<T>(null);

  useOutsideClick(ref, () => setIsVisible(false));

  return { ref, isVisible, setIsVisible };
}
