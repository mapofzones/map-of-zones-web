import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface ButtonGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  isActive?: (key: string) => boolean;
}
