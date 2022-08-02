import cn from 'classnames';

import { QuestionMark } from 'icons';

import { Tooltip } from '../Tooltip/Tooltip';
import styles from './ExplanationTooltip.module.scss';
import { ExplanationTooltipProps } from './ExplanationTooltip.props';

export function ExplanationTooltip({
  className,
  text = '',
  ...props
}: ExplanationTooltipProps): JSX.Element {
  return (
    <div className={cn(styles.container, className)} {...props}>
      <QuestionMark className={styles.questionMark} />
      <Tooltip className={styles.tooltip}>{text}</Tooltip>
    </div>
  );
}
