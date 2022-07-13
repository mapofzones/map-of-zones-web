import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialValue: string;
  onSearchChange: (value: string) => void;
  className?: string;
}
