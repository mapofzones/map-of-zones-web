import tinygradient from 'tinygradient';
import amplitude from 'amplitude-js';

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

export function trackEvent({ category, action, label, value }) {
  if (process.env.NODE_ENV === 'production') {
    const instance = amplitude.getInstance();

    instance.init(process.env.REACT_APP_AMPLITUDE_KEY);
    instance.logEvent(
      `${category}:${action}`.toUpperCase().replace(/\s/g, '_'),
      {
        value: label,
      },
    );

    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  }
}
