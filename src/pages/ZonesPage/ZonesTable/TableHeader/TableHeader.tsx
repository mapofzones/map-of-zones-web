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
          <span>
            IBC Volume
            <QuestionMark className={styles.questionMark} />
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
            <QuestionMark className={styles.questionMark} />
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
            <QuestionMark className={styles.questionMark} />
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
            <QuestionMark className={styles.questionMark} />
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
            <QuestionMark className={styles.questionMark} />
          </span>
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
          <span>
            DAU
            <QuestionMark className={styles.questionMark} />
          </span>
        </th>
        <th>IBC Transfers Activity</th>
      </tr>
    </thead>
  );
}
