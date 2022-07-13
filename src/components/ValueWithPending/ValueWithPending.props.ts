import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

export interface ValueWithPendingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
  pendingValue?: number;
  numberType: NumberType;
  alignRight?: boolean;
  className?: string;
}
