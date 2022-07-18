import { QuestionMark } from 'icons';

import { Tooltip } from '../Tooltip/Tooltip';
import styles from './ExplanationTooltip.module.scss';

export function ExplanationTooltip({ text = '' }: { text: string }): JSX.Element {
  return (
    <div className={styles.container}>
      <QuestionMark className={styles.questionMark} />
      <Tooltip className={styles.tooltip} text={text} />
    </div>
  );
}
