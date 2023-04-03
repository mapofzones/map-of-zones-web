import {
  FunctionComponent,
  ReactNode,
  SVGProps,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
} from 'react';

export interface LinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  underlined?: boolean;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}
