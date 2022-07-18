import { Tooltip } from 'components';
import { QuestionMark } from 'icons';

import styles from './ExplanationTooltip.module.scss';

export function ExplanationTooltip({ text = '' }: { text: string }) {
  return (
    <div className={styles.container}>
      <QuestionMark className={styles.questionMark} />
      <Tooltip className={styles.tooltip} text={text} />
    </div>
  );
}
