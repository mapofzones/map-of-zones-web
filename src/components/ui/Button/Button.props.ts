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
  IconBefore?: FunctionComponent<SVGProps<SVGSVGElement>>;
  IconAfter?: FunctionComponent<SVGProps<SVGSVGElement>>;
  className?: string;
  size?: ButtonSize;
  buttonType?: ButtonType;
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
