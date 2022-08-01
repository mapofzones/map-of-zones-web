import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  className?: string;
  numberType: NumberType;
  pendingValue?: number | null;
  prefix?: string;
  suffix?: string;
  value?: number | null;
}
