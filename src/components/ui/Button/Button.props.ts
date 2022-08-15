import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
  SVGProps,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  size?: ButtonSize;
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'mdeium',
  LARGE = 'large',
}
