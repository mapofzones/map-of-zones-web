import { NumberType } from 'components';
import { LinkProps } from 'components/ui/ExternalLink/ExternalLink.props';

export interface ZoneInfoData extends ZoneInfoValues {
  id: string;
  name: string;
  logoUrl?: string | null;
  isIbcVolumeShouldBeCustomized?: boolean;
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
