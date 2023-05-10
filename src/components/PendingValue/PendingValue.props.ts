import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'ui';

export interface PendingValueProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  alignRight?: boolean;
  className?: string;
  compact?: boolean;
  numberType: NumberType;
  value?: number | null;
}
