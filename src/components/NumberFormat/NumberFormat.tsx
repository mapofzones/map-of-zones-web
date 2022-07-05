import { default as Format } from 'react-number-format';

import { NumberFormatProps } from './NumberFormat.props';
import { NumberType } from './NumberType';

export function NumberFormat({
  numberType = NumberType.Number,
  className,
  ...props
}: NumberFormatProps) {
  const prefix = numberType === 'currency' ? '$' : '';

  return (
    <Format
      className={className}
      displayType={'text'}
      thousandSeparator={true}
      prefix={prefix}
      {...props}
    />
  );
}
