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

export const getNodeColor = sentPercentage => {
  const value =
    sentPercentage === 0.5
      ? 0.5
      : sentPercentage < 0.5
      ? 0.5 - Math.pow(Math.abs(sentPercentage - 0.5), 1 / 3) / 1.59
      : Math.pow(sentPercentage - 0.5, 1 / 3) / 1.59 + 0.5;
  return gradient.rgbAt(1 - (value || 0)).toHexString();
};

export const toFixed = (number, decimalDigits = 0) =>
  parseFloat(number).toFixed(decimalDigits);

export const roundNumber = (number, decimalDigits = 0) =>
  parseFloat(toFixed(number, decimalDigits));

export const formatPercentage = (percentage, decimalDigits = 2) =>
  `${toFixed(percentage * 100, decimalDigits).replace('.', ',')}%`;

export const formatNumber = number =>
  Intl ? new Intl.NumberFormat().format(number) : number;

export function trackEvent({ category, action, label, extra = {} }) {
  if (process.env.NODE_ENV === 'production') {
    const instance = amplitude.getInstance();

    instance.init(process.env.REACT_APP_AMPLITUDE_KEY);
    instance.logEvent(
      `${category}:${action}`.toUpperCase().replace(/\s/g, '_'),
      {
        ...extra,
        value: label,
      },
    );

    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  }
}

export function removeDuplicatedZoneCounerparties(arr) {
  return arr.filter(
    ({ zone_counerparty }, index, array) =>
      array.findIndex(item => item.zone_counerparty === zone_counerparty) ===
      index,
  );
}

export const getIsUptrend = txsActivities =>
  txsActivities[0].txs < txsActivities[txsActivities.length - 1].txs;
