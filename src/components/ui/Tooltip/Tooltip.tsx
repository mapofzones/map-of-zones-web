import { useRef, useState } from 'react';

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
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [style, setStyle] = useState<React.CSSProperties>();

  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
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
      style.bottom = window.innerHeight - hoverRect.top;
    }

    setVisible(true);
    setStyle(style);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <span
      ref={tooltipRef}
      className={cn(styles.container, className)}
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
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
