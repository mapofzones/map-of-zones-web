import { NumberFormatProps } from './NumberFormat.props';
import { NumberType, NUMBER_STYLE_MAP } from './NumberType';

export function NumberFormat({
  className,
  compact = false,
  currency = 'USD',
  defaultValue = '-',
  numberType = NumberType.Number,
  value,
  ...props
}: NumberFormatProps) {
  const formattedNumber = formatNumber(value, numberType, compact, defaultValue, currency);

  return (
    <span className={className} {...props}>
      {formattedNumber}
    </span>
  );
}

// eslint-disable-next-line sort-exports/sort-exports
export function formatNumber(
  value?: number | null,
  numberType: NumberType = NumberType.Number,
  compact = false,
  defaultValue = '-',
  currency = 'USD'
): string {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  const integerValue = value | 0;
  if (integerValue === 0) {
  }

  const decimalSeparator = '.';
  const thousandSeparator = ' ';
  const notation = compact ? 'compact' : 'standard';
  const maximumSignificantDigits = compact ? 3 : numberType === NumberType.Percent ? 3 : 5;

  const formatter = new Intl.NumberFormat('en', {
    style: NUMBER_STYLE_MAP[numberType],
    notation,
    maximumSignificantDigits,
    currency,
    currencyDisplay: 'symbol',
  });

  const newValue = numberType === NumberType.Percent && value ? value / 100 : value;

  return formatter
    .formatToParts(newValue)
    .map(({ type, value }) => {
      switch (type) {
        case 'group':
          return thousandSeparator;
        case 'decimal':
          return decimalSeparator;
        case 'percentSign':
          return ' %';
        default:
          return value;
      }
    })
    .reduce((result, part) => result + part);
}
