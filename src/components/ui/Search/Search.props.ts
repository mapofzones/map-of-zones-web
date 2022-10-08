import { DetailedHTMLProps, HTMLAttributes, FocusEvent } from 'react';
export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  autoFocus?: boolean;
  className?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onSearchChange?: (value: string) => void;
}
