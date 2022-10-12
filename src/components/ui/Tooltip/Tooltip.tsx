import { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { Portal } from 'components';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import { TooltipBody } from './TooltipBody';

export function Tooltip({
  className,
  hoverElement,
  children,
  width = 240,
  margin = 16,
  onTooltipHide,
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [style, setStyle] = useState<React.CSSProperties>();

  const tooltipRef = useRef<HTMLDivElement>(null);

  const calculateStyle = useCallback(() => {
    const style: React.CSSProperties = { maxWidth: width };
    const hoverRect = tooltipRef.current?.getBoundingClientRect();

    if (!hoverRect) {
      return;
    }

    style.left = getLeftCoordinate(hoverRect, width, margin);
    const isHoverrInTopHalf = hoverRect.top < window.innerHeight / 2;

    if (isHoverrInTopHalf) {
      style.top = hoverRect.top + hoverRect.height + margin;
    } else {
      style.bottom = window.innerHeight - hoverRect.top + margin / 2;
    }

    setStyle(style);
  }, [margin, width]);

  const showTooltip = () => {
    // UI bouncing when calculate styles after setVisible(true)
    calculateStyle();
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);

    if (onTooltipHide) {
      onTooltipHide();
    }
  };

  // recalculate position when some of position props changed (margin or width)
  useEffect(() => {
    if (visible) {
      calculateStyle();
    }
    // to reduce recalculation on visible change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculateStyle]);

  return (
    <span
      ref={tooltipRef}
      className={cn(styles.container, className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {hoverElement}
      {visible && (
        <Portal>
          <TooltipBody style={style}>{children}</TooltipBody>
        </Portal>
      )}
    </span>
  );
}

function getLeftCoordinate(hoverRect: DOMRect, width: number, margin: number) {
  let left = hoverRect.left + hoverRect.width / 2 - width / 2;
  left = Math.max(margin, left);
  left = Math.min(left, document.body.clientWidth - width - margin);
  return left;
}
