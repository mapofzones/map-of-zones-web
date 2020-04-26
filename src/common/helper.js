import tinygradient from 'tinygradient';

const gradient = tinygradient([
  '#D76969',
  '#D79D69',
  '#EABA82',
  '#D4D759',
  '#5CA98D',
]);

export const getZoneColor = sentPercentage =>
  gradient.rgbAt(1 - (sentPercentage || 0)).toHexString();

export function roundNumber(number, decimalDigits = 0) {
  return parseFloat(parseFloat(number).toFixed(decimalDigits));
}

export const formatPercentage = (percentage, decimalDigits) =>
  `${roundNumber(percentage * 100, decimalDigits)}%`;
