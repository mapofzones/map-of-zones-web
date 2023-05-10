import { Tooltip } from 'ui';

import { DropdownTooltipProps } from './DropdownTooltip.props';

export function DropdownTooltip({
  children,
  className,
  body,
  maxWidth = 176,
  ...props
}: DropdownTooltipProps) {
  return (
    <Tooltip
      className={className}
      body={body}
      showTriangle={true}
      isVertical={false}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </Tooltip>
  );
}
