import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ZoneLogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  logoUrl?: string | null;
  name?: string | null;
  size?: string;
  loading?: boolean;
  className?: string;
  withOuterShadow?: boolean;
}
