import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SkeletonTextWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  loading?: boolean;
  defaultText?: string;
  defaultTextMinLength?: number;
  defaultTextMaxLength?: number;
}
