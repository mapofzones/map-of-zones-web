import { NumberType } from './NumberType';

export interface NumberFormatProps {
  className?: string;
  compact?: boolean;
  currency?: string;
  defaultValue?: string;
  numberType?: NumberType;
  value?: number | null;
}
