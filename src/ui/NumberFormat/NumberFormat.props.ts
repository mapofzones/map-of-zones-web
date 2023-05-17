import { NumberType } from 'types/NumberType';

export interface NumberFormatProps {
  className?: string;
  compact?: boolean;
  currency?: string;
  defaultValue?: string;
  numberType?: NumberType;
  value?: number | null;
}

export const NUMBER_STYLE_MAP = {
  [NumberType.Number]: 'decimal',
  [NumberType.Currency]: 'currency',
  [NumberType.Percent]: 'percent',
};
