import { default as Format } from 'react-number-format';
import { NumberFormatProps } from './NumberFormat.props';
import { NumberType } from './NumberType';

export function NumberFormat({ numberType = NumberType.Number, ...props }: NumberFormatProps) {
  const prefix = numberType === 'currency' ? '$' : '';
  return <Format displayType={'text'} thousandSeparator={true} prefix={prefix} {...props} />;
}
