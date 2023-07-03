import { ReactNode } from 'react';

export interface CheckboxProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
