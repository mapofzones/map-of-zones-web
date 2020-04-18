import tinygradient from 'tinygradient';

const gradient = tinygradient([
  '#D76969',
  '#D79D69',
  '#EABA82',
  '#D4D759',
  '#5CA98D',
]);

export const getZoneColor = sentPercentage =>
  gradient.rgbAt(sentPercentage || 0).toHexString();
