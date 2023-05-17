import { NumberType } from 'types/NumberType';
import { LinkProps } from 'ui/ExternalLink/ExternalLink.props';

export interface ZoneInfoData extends ZoneInfoValues {
  id: string;
  name: string;
  logoUrl?: string | null;
}
export interface ZoneInfoValues {
  rating?: number | null;
  ratingDiff?: number | null;
  value?: number | null;
  pendingValue?: number | null;
}

export interface ZonesInfoRowProps extends LinkProps {
  className?: string;
  zone: ZoneInfoData;
  searchValue?: string;
  numberType?: NumberType;
}
