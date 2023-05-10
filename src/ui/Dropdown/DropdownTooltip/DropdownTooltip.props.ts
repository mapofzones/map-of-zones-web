import { ReactNode } from 'react';

export interface DropdownTooltipProps {
  body: ReactNode;
  children: ReactNode;
  className?: string;
  maxWidth?: number;
}
