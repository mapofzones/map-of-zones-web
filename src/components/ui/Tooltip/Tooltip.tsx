import cn from 'classnames';

import { Portal } from 'components';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.props';
import { TooltipBody } from './TooltipBody';
import { useToggleVisibilityWithTimeout } from './useToggleVisibilityWithTimeout';
import { useTooltipPositionStyle } from './useTooltipPositionStyle';

export function Tooltip({
  body,
  children,
  className,
  isVertical = true,
  margin = 16,
  maxWidth = 240,
  showTriangle = false,
  hideDelayMs = 0,
  onMouseEnter,
  ...props
}: TooltipProps) {
  const { visible, showTooltip, hideTooltip } = useToggleVisibilityWithTimeout(hideDelayMs);

  const { tooltipRef, bodyRef, posStyle, trianglePosition } = useTooltipPositionStyle(
    visible,
    isVertical,
    showTriangle,
    maxWidth,
    margin
  );

  const onMouseEnterInternal = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    showTooltip();
    onMouseEnter && onMouseEnter(event);
  };

  const onBodyClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      {!body && children}
      {body && (
        <span
          ref={tooltipRef}
          className={cn(className, styles.container)}
          onMouseEnter={onMouseEnterInternal}
          onMouseLeave={hideTooltip}
          {...props}
        >
          {children}
          {visible && (
            <Portal>
              <TooltipBody
                innerRef={bodyRef}
                style={{ ...posStyle, maxWidth }}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                onClick={onBodyClick}
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
