import { NumberFormatProps as FormatProps } from 'react-number-format';

import { NumberType } from './NumberType';

export interface NumberFormatProps extends FormatProps {
  className?: string;
  numberType?: NumberType;
}
