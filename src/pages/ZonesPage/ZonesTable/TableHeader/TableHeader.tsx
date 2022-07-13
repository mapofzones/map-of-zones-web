import { QuestionMark } from 'icons';

import styles from './TableHeader.module.scss';

export function TableHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>#</div>
      <div className={styles.title}>Name</div>
      <div className={styles.title}>IBC Volume</div>
      <div className={styles.title}>
        <div className={styles.targetCircle} />
        IBC Volume In
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        <div className={styles.sourceCircle} />
        IBC Volume Out
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        Total TXS
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        IBC Transfers
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        Peers
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        Channels
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>
        DAU
        <QuestionMark className={styles.questionMark} />
      </div>
      <div className={styles.title}>IBC Transfers Activity</div>
    </div>
  );
}
