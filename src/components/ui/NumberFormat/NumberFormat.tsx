/* eslint-disable sort-exports/sort-exports */
import React from 'react';

import { NumberFormatProps } from './NumberFormat.props';
import { NumberType, NUMBER_STYLE_MAP } from './NumberType';

export function NumberFormat({
  className,
  compact = false,
  currency = 'USD',
  decimalSeparator = '.',
  defaultValue,
  fractionOpacity = 0.7,
  numberType = NumberType.Number,
  value,
  ...props
}: NumberFormatProps) {
  const formattedNumber = formatNumberToJSX({
    compact,
    currency,
    decimalSeparator,
    defaultValue,
    fractionOpacity,
    numberType,
    value,
  });

  return (
    <span className={className} {...props}>
      {formattedNumber}
    </span>
  );
}

export function formatNumberToJSX({
  compact = false,
  currency = 'USD',
  decimalSeparator = '.',
  defaultValue = '—',
  fractionOpacity = 0.7,
  numberType = NumberType.Number,
  value,
}: {
  compact?: boolean;
  currency?: string;
  decimalSeparator?: string;
  defaultValue?: string;
  fractionOpacity?: number;
  numberType: NumberType;
  value?: number | null;
}): JSX.Element {
  const parts = getNumberFormatParts({
    compact,
    currency,
    decimalSeparator,
    numberType,
    value,
  });

  if (!parts) {
    return <>{defaultValue}</>;
  }

  const jsxParts = parts.map(({ type, value }) => {
    if (type === 'fraction') {
      return (
        <span key={'fraction'} style={{ opacity: fractionOpacity }}>
          {value}
        </span>
      );
    }
    return value;
  });

  return <>{jsxParts}</>;
}

export function formatNumberToString(
  value?: number | null,
  numberType: NumberType = NumberType.Number,
  compact = false,
  defaultValue = '—',
  currency = 'USD'
): string {
  const parts = getNumberFormatParts({
    compact,
    currency,
    numberType,
    value,
  });

  if (!parts) {
    return defaultValue;
  }

  return parts.reduce((result, part) => result + part.value, '');
}

function getNumberFormatParts({
  compact = false,
  currency = 'USD',
  decimalSeparator = '.',
  numberType = NumberType.Number,
  value,
}: {
  compact?: boolean;
  currency?: string;
  decimalSeparator?: string;
  numberType?: NumberType;
  value?: number | null;
}): Intl.NumberFormatPart[] | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

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

  const parts = formatter.formatToParts(newValue).map(({ type, value }) => {
    switch (type) {
      case 'group':
        return { type, value: thousandSeparator };
      case 'decimal':
        return { type, value: decimalSeparator };
      case 'percentSign':
        return { type, value: ' %' };
      default:
        return { type, value };
    }
  });

  return parts;
}
