import { QuestionMark } from 'icons';

import styles from './TableHeader.module.scss';

export function TableHeader() {
  return (
    <thead className={styles.container}>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>
          IBC Volume
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
          <div className={styles.targetCircle} />
          IBC Volume In
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
          <div className={styles.sourceCircle} />
          IBC Volume Out
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
          Total TXS
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>
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
        <th>
          DAU
          <QuestionMark className={styles.questionMark} />
        </th>
        <th>IBC Transfers Activity</th>
      </tr>
    </thead>
  );
}
