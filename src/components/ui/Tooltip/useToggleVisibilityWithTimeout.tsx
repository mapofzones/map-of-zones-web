import { MutableRefObject, useEffect, useRef, useState } from 'react';

export function tryClearTimerRef(timerRef: MutableRefObject<NodeJS.Timeout | null>) {
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }
}

export function useToggleVisibilityWithTimeout(hideDelayMs: number) {
  const [visible, setVisible] = useState<boolean>(false);

  const bodyMouseHover = useRef<boolean>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    if (!bodyMouseHover.current) {
      setVisible(false);
    }
  };

  const showTooltip = () => {
    bodyMouseHover.current = true;
    setVisible(true);
    tryClearTimerRef(timerRef);
  };

  const hideTooltip = () => {
    bodyMouseHover.current = false;
    if (!hideDelayMs) {
      handleClose();
    } else {
      timerRef.current = setTimeout(handleClose, hideDelayMs);
    }
  };

  useEffect(() => {
    return () => {
      tryClearTimerRef(timerRef);
    };
  }, []);
  return { visible, showTooltip, hideTooltip };
}
