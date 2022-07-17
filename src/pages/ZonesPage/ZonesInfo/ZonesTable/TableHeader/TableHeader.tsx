import cn from 'classnames';

import { ExplanationTooltip } from './ExplanationTooltip/ExplanationTooltip';
import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { ColumnKeys } from './Types';

const EXPLANATION_TEXT = {
  ibcVolumeMainnet:
    'USD value of tokens successfully relayed via IBC transfer with pertinent volume in progress',
  ibcVolumeInMainnet:
    'USD value of tokens successfully received from other Zones with pertinent volume in progress',
  ibcVolumeOutMainnet:
    'USD value of tokens successfully transferred to other Zones with pertinent volume in progress',
  totalTxs: 'All transactions in a specified zone',
  ibcTransfersMainnet:
    'Number of successfully relayed IBC transfers with pertinent quantity in progress',
  peersCountMainnet:
    'Number of counterparties of a particular Zone with established IBC connectors',
  channelsCount: 'Number of channels that connect a particular Zone to its counterparties',
  ibcDauMainnet: 'Number of Zone’s unique addresses initiated outward IBC transfer(s)',
};

export function TableHeader({ selectedColumnKey, setSelectedColumnKey }: TableHeaderProps) {
  return (
    <thead className={styles.container}>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolume,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolume)}
        >
          <span>
            IBC Volume
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolumeMainnet} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolumeReceived,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolumeReceived)}
        >
          <span>
            <div className={styles.targetCircle} />
            IBC Volume In
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolumeInMainnet} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolumeSent,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolumeSent)}
        >
          <span>
            <div className={styles.sourceCircle} />
            IBC Volume Out
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolumeOutMainnet} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.TotalTxs,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.TotalTxs)}
        >
          <span>
            Total TXS
            <ExplanationTooltip text={EXPLANATION_TEXT.totalTxs} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcTransfers,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcTransfers)}
        >
          <span>
            IBC Transfers
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcTransfersMainnet} />
          </span>
        </th>
        <th>
          Peers
          <ExplanationTooltip text={EXPLANATION_TEXT.peersCountMainnet} />
        </th>
        <th>
          Channels
          <ExplanationTooltip text={EXPLANATION_TEXT.channelsCount} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcActiveAddresses,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcActiveAddresses)}
        >
          <span>
            DAU
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcDauMainnet} />
          </span>
        </th>
        <th>IBC Transfers Activity</th>
      </tr>
    </thead>
  );
}
