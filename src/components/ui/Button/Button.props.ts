import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
  SVGProps,
} from 'react';

import { ElementSize } from 'types/ElementSize';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  IconBefore?: FunctionComponent<SVGProps<SVGSVGElement>>;
  IconAfter?: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  size?: ElementSize;
  buttonType?: ButtonType;
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
