import { ReactNode } from 'react';

export interface CompareButtonProps {
  className?: string;
  children?: ReactNode;
  text?: string;
  onClick?: () => void;
}
