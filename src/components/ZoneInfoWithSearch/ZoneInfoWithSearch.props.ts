import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ZoneData {
  logoUrl?: string | null;
  name: string;
  ratingDiff?: number | null;
}

export interface ZoneInfoWithSearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  searchValue?: string;
  zone: ZoneData;
}
