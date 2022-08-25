import { NumberType } from 'components';
import { LinkProps } from 'components/ui/ExternalLink/ExternalLink.props';

export interface ZoneInfoData {
  id: string;
  name: string;
  logoUrl?: string | null;
  ratingDiff: number;
  value: number;
  pendingValue?: number;
}

export interface ZonesInfoRowProps extends LinkProps {
  className?: string;
  zone: ZoneInfoData;
  searchValue?: string;
  numberType?: NumberType;
}
