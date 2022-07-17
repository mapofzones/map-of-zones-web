import { QuestionMark } from 'icons';

import styles from './ExplanationTooltip.module.scss';

export function ExplanationTooltip({ text = '' }) {
  return (
    <div className={styles.container}>
      <QuestionMark className={styles.questionMark} />
      <div className={styles.tooltip}>{text}</div>
    </div>
  );
}
