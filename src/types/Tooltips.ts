import { PeriodKeys } from 'components';

export const tooltips = {
  marketCap: () =>
    `The total market value of a cryptocurrency's on-chain supply./n/nMarket Cap = Current Price x On-chain Supply`,
  dau: getDauTooltip,
  ibcDau: (period: PeriodKeys) =>
    `Number of Zone’s unique addresses initiated at least one outward IBC transfer within a ${period} period`,
  peersCount: () => 'Number of counterparties of a particular Zone with established IBC connectors',
  channelsCount: () => 'Number of channels that connect a particular Zone to its counterparties',
  supply: () => 'The amount of coins that are issued on a particular blockchain (on-chain supply)',
  ibcVolume: () =>
    'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  ibcVolumeIn: () =>
    'USD value of tokens successfully received from other Zones with pertinent volume in progress',
  ibcVolumeOut: () =>
    'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
  totalTxs: () => 'All transactions in a specified zone',
  ibcTransfers: () =>
    'Number of successfully relayed IBC transfers with pertinent quantity in progress',
};

function getDauTooltip(period: PeriodKeys) {
  const text =
    'active addresses (Number of Zone’s unique addresses initiated at least one transaction within a';
  if (period === PeriodKeys.DAY) {
    return `Daily ${text} ${period} period`;
  }
  if (period === PeriodKeys.WEEK) {
    return `Weekly ${text} ${period} period`;
  }
  return `Monthly ${text} ${period} period`;
}
