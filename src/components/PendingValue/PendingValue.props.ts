import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

export interface PendingValueProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  className?: string;
  compact?: boolean;
  numberType: NumberType;
  prefix?: string;
  suffix?: string;
  value?: number | null;
}
