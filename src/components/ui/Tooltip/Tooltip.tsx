import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { Portal } from 'components';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import { TooltipBody } from './TooltipBody';

export type TrianglePosition = 'top' | 'left' | 'bottom' | 'right';

export function Tooltip({
  body,
  children,
  className,
  isVertical = true,
  margin = 16,
  maxWidth = 240,
  showTriangle = false,
  ...props
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [trianglePosition, setTrianglePosition] = useState<TrianglePosition | undefined>(undefined);
  const [style, setStyle] = useState<React.CSSProperties>();

  const tooltipRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      return;
    }

    const bodyClientRect = bodyRef.current?.getBoundingClientRect();
    const style: React.CSSProperties = { maxWidth };
    const hoverRect = tooltipRef.current?.getBoundingClientRect();

    if (!hoverRect) {
      return;
    }

    const isHoverInTopHalf = hoverRect.top < window.innerHeight / 2;
    const isHoverInLeftHalf = hoverRect.left < window.innerWidth / 2;

    if (isVertical) {
      style.left = getLeftCoordinate(hoverRect, bodyClientRect?.width ?? maxWidth, margin);

      if (isHoverInTopHalf) {
        style.top = hoverRect.top + hoverRect.height + margin;
      } else {
        style.bottom = window.innerHeight - hoverRect.top + margin;
      }
    } else {
      style.top = getTopCoordinate(hoverRect, bodyClientRect?.height ?? 0, margin);

      if (isHoverInLeftHalf) {
        style.left = hoverRect.left + hoverRect.width + margin;
      } else {
        style.right = window.innerWidth - hoverRect.left + margin;
      }
    }

    if (showTriangle) {
      const trianglePosition = getTrianglePosition(isVertical, isHoverInTopHalf, isHoverInLeftHalf);
      setTrianglePosition(trianglePosition);
    }

    setStyle(style);
  }, [visible, isVertical, margin, maxWidth, showTriangle]);

  return (
    <span
      ref={tooltipRef}
      className={cn(styles.container, className)}
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      {...props}
    >
      {children}
      {visible && (
        <Portal>
          <TooltipBody innerRef={bodyRef} style={style}>
            {body}
            {showTriangle && (
              <div className={cn(styles.triangle, styles[trianglePosition ?? 'top'])} />
            )}
          </TooltipBody>
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

function getTopCoordinate(hoverRect: DOMRect, height: number, margin: number) {
  let top = hoverRect.top + hoverRect.height / 2 - height / 2;
  top = Math.max(margin, top);
  top = Math.min(top, document.body.clientHeight - height - margin);
  return top;
}

function getTrianglePosition(
  isVertical: boolean,
  isTopHalf: boolean,
  isLeftPart: boolean
): TrianglePosition {
  return isVertical ? (isTopHalf ? 'top' : 'bottom') : isLeftPart ? 'left' : 'right';
}
