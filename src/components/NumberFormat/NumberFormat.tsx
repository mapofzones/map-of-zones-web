import { default as Format } from 'react-number-format';

export function NumberFormat({ type = 'number', ...props }: any) {
  const prefix = type === 'currency' ? '$' : '';
  return <Format displayType={'text'} thousandSeparator={true} prefix={prefix} {...props} />;
}
