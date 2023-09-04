import { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { ArrowRight } from 'assets/icons';
import { useWindowSizeWithDebounce } from 'hooks/useWindowSizeWithDebounce';

import styles from './ScrollableArrowWrapper.module.scss';

import { ScrollableArrowWrapperProps } from '.';

const SCROLL_FACTOR = 0.6;

export function ScrollableArrowWrapper({
  className,
  children,
  ...props
}: ScrollableArrowWrapperProps): JSX.Element {
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);

  const [updated, updateState] = useState<object>();
  const forceUpdate = useCallback(() => updateState({}), []);

  const { windowSize } = useWindowSizeWithDebounce(100);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (ref.current?.scrollWidth > ref.current?.clientWidth) {
      setShowLeftIcon(ref.current && ref.current?.scrollLeft > 0);
      setShowRightIcon(
        ref.current &&
          ref.current?.scrollWidth - ref.current?.clientWidth > Math.ceil(ref.current?.scrollLeft)
      );
    } else {
      setShowLeftIcon(false);
      setShowRightIcon(false);
    }
  }, [windowSize, updated]);

  const onLeftClick = (): void => {
    ref.current?.scrollBy(-ref.current.clientWidth * SCROLL_FACTOR, 0);
    forceUpdate();
  };

  const onRightClick = (): void => {
    ref.current?.scrollBy(ref.current.clientWidth * 0.6, 0);
    forceUpdate();
  };

  return (
    <div className={styles.container}>
      {showLeftIcon && (
        <>
          <ArrowRight className={styles.arrowLeft} onClick={onLeftClick} />
          <div className={cn(styles.shadow, styles.leftShadow)}></div>
        </>
      )}

      <div ref={ref} className={cn(className, styles.wrapper)} {...props}>
        {children}
      </div>

      {showRightIcon && (
        <>
          <ArrowRight className={styles.arrowRight} onClick={onRightClick} />
          <div className={cn(styles.shadow, styles.rightShadow)}></div>
        </>
      )}
    </div>
  );
}
