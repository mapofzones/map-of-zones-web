import { default as Format } from 'react-number-format';

import { NumberFormatProps } from './NumberFormat.props';
import { NumberType } from './NumberType';

export function NumberFormat({
  defaultValue = '-',
  numberType = NumberType.Number,
  className,
  ...props
}: NumberFormatProps) {
  const prefix = numberType === NumberType.Currency ? '$' : '';
  const suffix = numberType === NumberType.Percent ? ' %' : '';
  const decimalScale = numberType === NumberType.Percent ? 2 : undefined;
  const decimalSeparator = numberType === NumberType.Percent ? ',' : '.';
  const thousandSeparator = numberType === NumberType.Currency ? ',' : ' ';

  return (
    <Format
      className={className}
      defaultValue={defaultValue}
      displayType={'text'}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      suffix={suffix}
      decimalScale={decimalScale}
      decimalSeparator={decimalSeparator}
      {...props}
    />
  );
}
