import { QuestionMark } from 'icons';

import styles from './ExplanationTooltip.module.scss';

// TODO: add proptypes
// eslint-disable-next-line react/prop-types
export function ExplanationTooltip({ text = '' }) {
  return (
    <div className={styles.container}>
      <QuestionMark className={styles.questionMark} />
      <div className={styles.tooltip}>{text}</div>
    </div>
  );
}
