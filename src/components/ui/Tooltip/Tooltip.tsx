import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { Portal } from 'components';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import { TooltipBody } from './TooltipBody';

export type TrianglePosition = 'top' | 'left' | 'bottom' | 'right';

function tryClearTimerRef(timerRef: MutableRefObject<NodeJS.Timeout | null>) {
  if (timerRef.current) {
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }
}

export function Tooltip({
  body,
  children,
  className,
  isVertical = true,
  margin = 16,
  maxWidth = 240,
  showTriangle = false,
  hideDelayMs = 0,
  ...props
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [posStyle, setPosStyle] = useState<React.CSSProperties>();
  const [trianglePosition, setTrianglePosition] = useState<TrianglePosition | undefined>(undefined);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyMouseHover = useRef<boolean>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    if (!bodyMouseHover.current) {
      setVisible(false);
    }
  };

  const showTooltip = () => {
    setVisible(true);
    tryClearTimerRef(timerRef);
  };

  const hideTooltip = () => {
    if (!hideDelayMs) {
      handleClose();
    } else {
      timerRef.current = setTimeout(handleClose, hideDelayMs);
    }
  };

  const hadleBodyMouseEnter = () => {
    bodyMouseHover.current = true;
    showTooltip();
  };

  const handleBodyMouseLeave = () => {
    bodyMouseHover.current = false;
    hideTooltip();
  };

  useEffect(() => {
    return () => {
      tryClearTimerRef(timerRef);
    };
  }, []);

  const getTooltipPositionStyle = useCallback(
    (
      hoverRect: DOMRect,
      bodyClientRect: DOMRect | undefined,
      isHoverInTopHalf: boolean,
      isHoverInLeftHalf: boolean
    ) => {
      const style: React.CSSProperties = {};
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
      return style;
    },
    [isVertical, margin, maxWidth]
  );

  useEffect(() => {
    if (!visible) {
      return;
    }

    const bodyClientRect = bodyRef.current?.getBoundingClientRect();
    const hoverRect = tooltipRef.current?.getBoundingClientRect();

    if (!hoverRect) {
      return;
    }

    const isHoverInTopHalf = hoverRect.top < window.innerHeight / 2;
    const isHoverInLeftHalf = hoverRect.left < window.innerWidth / 2;

    const style: React.CSSProperties = getTooltipPositionStyle(
      hoverRect,
      bodyClientRect,
      isHoverInTopHalf,
      isHoverInLeftHalf
    );

    if (showTriangle) {
      const trianglePosition = getTrianglePosition(isVertical, isHoverInTopHalf, isHoverInLeftHalf);
      setTrianglePosition(trianglePosition);
    }

    setPosStyle(style);
  }, [visible, showTriangle, isVertical, getTooltipPositionStyle]);

  return (
    <>
      {!body && children}
      {body && (
        <span
          ref={tooltipRef}
          className={cn(styles.container, className)}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          {...props}
        >
          {children}
          {visible && (
            <Portal>
              <TooltipBody
                innerRef={bodyRef}
                style={{ ...posStyle, maxWidth }}
                onMouseEnter={hadleBodyMouseEnter}
                onMouseLeave={handleBodyMouseLeave}
              >
                {body}
                {showTriangle && (
                  <div className={cn(styles.triangle, styles[trianglePosition ?? 'top'])} />
                )}
              </TooltipBody>
            </Portal>
          )}
        </span>
      )}
    </>
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
