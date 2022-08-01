import { default as Format } from 'react-number-format';

import { NumberFormatProps } from './NumberFormat.props';
import { NumberType } from './NumberType';

export function NumberFormat({
  className,
  defaultValue = '-',
  numberType = NumberType.Number,
  prefix,
  suffix,
  ...props
}: NumberFormatProps) {
  const parsedPrefix =
    prefix === undefined ? (numberType === NumberType.Currency ? '$' : '') : prefix;
  const parsedSuffix =
    suffix === undefined ? (numberType === NumberType.Percent ? '%' : '') : suffix;
  const decimalScale = numberType === NumberType.Percent ? 2 : undefined;
  const decimalSeparator = numberType === NumberType.Percent ? ',' : '.';
  const thousandSeparator = numberType === NumberType.Currency ? ',' : ' ';

  return (
    <Format
      className={className}
      defaultValue={defaultValue}
      displayType={'text'}
      thousandSeparator={thousandSeparator}
      prefix={parsedPrefix}
      suffix={parsedSuffix}
      decimalScale={decimalScale}
      decimalSeparator={decimalSeparator}
      {...props}
    />
  );
}
