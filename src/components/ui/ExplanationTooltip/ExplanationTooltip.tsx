import cn from 'classnames';

import { QuestionMark } from 'icons';

import { Tooltip } from '../Tooltip/Tooltip';
import styles from './ExplanationTooltip.module.scss';
import { ExplanationTooltipProps } from './ExplanationTooltip.props';

export function ExplanationTooltip({
  className,
  text = '',
  position = 'left',
  ...props
}: ExplanationTooltipProps): JSX.Element {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.leftPos]: position === 'left',
        [styles.rightPos]: position === 'right',
        [styles.centerPos]: position === 'center',
      })}
      {...props}
    >
      <QuestionMark className={styles.questionMark} />
      <Tooltip className={styles.tooltip}>{text}</Tooltip>
    </div>
  );
}
