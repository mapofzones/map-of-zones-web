import { PeriodKeys } from 'components';
import { PERIODS_IN_STRING } from 'components/PeriodSelector/Types';

export const tooltips = {
  channelsCount: () => 'Number of channels that connect a particular Zone to its counterparties',
  dau: (period: PeriodKeys) =>
    `${PERIODS_IN_STRING[period]} active addresses (Number of Zone’s unique addresses initiated at least one transaction within a ${period} period)`,
  ibcDau: (period: PeriodKeys) =>
    `Number of Zone’s unique addresses initiated at least one outward IBC transfer within a ${period} period`,
  ibcTransfers: () =>
    'Number of successfully relayed IBC transfers with pertinent quantity in progress',
  ibcTransfersIn: () =>
    'Number of IBC transfers successfully reveived from other Zones with pertinent quantity in progress',
  ibcTransfersOut: () =>
    'Number of IBC transfers successfully transfered to other Zones with pertinent quantity in progress',
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
  nodesCount: () =>
    'RPC and Rest (LCD) identified nodes only (presently gRPC/Tendermint P2P/other not accounted for)',
  peersCount: () => 'Number of counterparties of a particular Zone with established IBC connectors',
  successRate: () =>
    'Ratio of successfully completed transfers to all transfers with the final status (i.e. success and failed)',
  supply: () => 'The amount of coins that are issued on a particular blockchain (on-chain supply)',
  totalTxs: () => 'All transactions in a specified zone',
  delegators: () =>
    'Number of unique delegators (addresses) staked their funds with a specified zone',
};
