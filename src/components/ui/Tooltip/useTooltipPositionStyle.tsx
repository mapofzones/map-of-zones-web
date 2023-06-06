import { useCallback, useLayoutEffect, useRef, useState } from 'react';

type TrianglePosition = 'top' | 'left' | 'bottom' | 'right';

interface TooltipPositionStyle {
  posStyle: React.CSSProperties | undefined;
  trianglePosition?: TrianglePosition;
  tooltipRef: React.RefObject<HTMLSpanElement>;
  bodyRef: React.RefObject<HTMLDivElement>;
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

export function useTooltipPositionStyle(
  visible: boolean,
  isVertical: boolean,
  showTriangle: boolean,
  maxWidth: number,
  margin: number
): TooltipPositionStyle {
  const [posStyle, setPosStyle] = useState<React.CSSProperties>();
  const [trianglePosition, setTrianglePosition] = useState<TrianglePosition>();

  const tooltipRef = useRef<HTMLSpanElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const bodyClientRect = bodyRef.current?.getBoundingClientRect();
    const hoverRect = tooltipRef.current?.getBoundingClientRect();
    if (!hoverRect || !bodyClientRect) {
      return;
    }

    const isHoverInTopHalf = hoverRect.top < window.innerHeight / 2;
    const isHoverInLeftHalf = hoverRect.left < window.innerWidth / 2;

    const style = getTooltipPositionStyle(
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

  return { tooltipRef, bodyRef, posStyle, trianglePosition };
}
