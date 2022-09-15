import { PeriodKeys } from 'components';

export const tooltips = {
  channelsCount: () => 'Number of channels that connect a particular Zone to its counterparties',
  dau: getDauTooltip,
  ibcDau: (period: PeriodKeys) =>
    `Number of Zone’s unique addresses initiated at least one outward IBC transfer within a ${period} period`,
  ibcTransfers: () =>
    'Number of successfully relayed IBC transfers with pertinent quantity in progress',
  ibcTransfersFailed: () =>
    'Number of IBC transfers failed attributed to a particular pair of channels between Zones',
  ibcTransfersPending: () => 'Balancing figure between inbound and outbound IBC transfers',
  ibcVolume: () =>
    'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  ibcVolumeIn: () =>
    'USD value of tokens successfully received from other Zones with pertinent volume in progress',
  ibcVolumeOut: () =>
    'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
  marketCap: () =>
    `The total market value of a cryptocurrency's on-chain supply.\n\nMarket Cap = Current Price x On-chain Supply`,
  peersCount: () => 'Number of counterparties of a particular Zone with established IBC connectors',
  successRate: () =>
    'Ratio of successfully completed transfers to all transfers with the final status (i.e. success and failed)',
  supply: () => 'The amount of coins that are issued on a particular blockchain (on-chain supply)',
  totalTxs: () => 'All transactions in a specified zone',
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
