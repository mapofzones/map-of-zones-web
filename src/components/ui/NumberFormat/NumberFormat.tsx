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
  if (value === null) {
    return defaultValue;
  }

  const decimalSeparator = '.';
  const thousandSeparator = numberType === NumberType.Currency ? ',' : ' ';
  const notation = compact ? 'compact' : 'standard';
  const maximumSignificantDigits = compact ? 3 : undefined;
  const maximumFractionDigits = numberType === NumberType.Percent ? 2 : undefined;

  const formatter = new Intl.NumberFormat('en', {
    style: NUMBER_STYLE_MAP[numberType],
    notation,
    maximumSignificantDigits,
    minimumFractionDigits: 0,
    maximumFractionDigits,
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
