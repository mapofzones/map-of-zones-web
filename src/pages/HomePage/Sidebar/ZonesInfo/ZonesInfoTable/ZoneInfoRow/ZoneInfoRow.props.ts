import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { NumberType } from 'components';

export interface ZonesInfoRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
  zone: ZoneInfoData;
  numberType?: NumberType;
}

export interface ZoneInfoData {
  id: string;
  name: string;
  logoUrl?: string | null;
  ratingDiff: number;
  value: number;
  pendingValue?: number;
}
