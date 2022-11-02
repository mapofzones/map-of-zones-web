import { NumberType } from './NumberType';

export interface NumberFormatProps {
  className?: string;
  compact?: boolean;
  currency?: string;
  decimalSeparator?: string;
  defaultValue?: string;
  fractionOpacity?: number;
  maxSignificantDigits?: number;
  minFractionDigits?: number;
  numberType?: NumberType;
  value?: number | null;
}
