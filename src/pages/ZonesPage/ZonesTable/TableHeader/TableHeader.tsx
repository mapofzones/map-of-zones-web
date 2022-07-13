import cn from 'classnames';

import { QuestionMark } from 'icons';

import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { ColumnKeys } from './Types';

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
          IBC Volume
          <QuestionMark className={styles.questionMark} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolumeReceived,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolumeReceived)}
        >
          <div className={styles.targetCircle} />
          IBC Volume In
          <QuestionMark className={styles.questionMark} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcVolumeSent,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcVolumeSent)}
        >
          <div className={styles.sourceCircle} />
          IBC Volume Out
          <QuestionMark className={styles.questionMark} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.TotalTxs,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.TotalTxs)}
        >
          Total TXS
          <QuestionMark className={styles.questionMark} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcTransfers,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcTransfers)}
        >
          IBC Transfers
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
          Peers
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
          Channels
          <QuestionMark className={styles.questionMark} />
        </th>
        <th
          className={cn({
            [styles.selected]: selectedColumnKey === ColumnKeys.IbcActiveAddresses,
          })}
          onClick={() => setSelectedColumnKey(ColumnKeys.IbcActiveAddresses)}
        >
          DAU
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>IBC Transfers Activity</th>
      </tr>
    </thead>
  );
}
