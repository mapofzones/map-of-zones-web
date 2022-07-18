import cn from 'classnames';

import { ExplanationTooltip } from './ExplanationTooltip/ExplanationTooltip';
import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { ColumnKeys } from './Types';

// TODO: add texts
const EXPLANATION_TEXT = {
  ibcVolume: '',
  ibcVolumeSent: '',
  ibcVolumeReceived: '',
  ibcTransfers: '',
  ibcTransfersPending: '',
  ibcTransfersFailed: '',
  successRate: '',
};

export function TableHeader({ selectedColumnKey, setSelectedColumnKey }: TableHeaderProps) {
  return (
    <thead className={styles.container}>
      <tr>
        <th>Peer</th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolumeSent,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolumeSent)}
        >
          <span>
            Total IBC Volume
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolume} />
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
            Injective Sends
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolumeSent} />
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
            Injective Receives
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcVolumeReceived} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcTransfers,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcTransfers)}
        >
          <span>
            IBC Success
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcTransfers} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcTransfersPending,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcTransfersPending)}
        >
          <span>
            IBC Pending
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcTransfersPending} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcTransfersFailed,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcTransfersFailed)}
        >
          <span>
            IBC Failed
            <ExplanationTooltip text={EXPLANATION_TEXT.ibcTransfersFailed} />
          </span>
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.SuccessRate,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.SuccessRate)}
        >
          <span>
            Success Rate
            <ExplanationTooltip text={EXPLANATION_TEXT.successRate} />
          </span>
        </th>
      </tr>
    </thead>
  );
}
