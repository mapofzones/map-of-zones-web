import cn from 'classnames';

import { QuestionMark } from 'assets/icons';

import styles from './ExplanationTooltip.module.scss';
import { ExplanationTooltipProps } from './ExplanationTooltip.props';
import { Tooltip } from '../Tooltip/Tooltip';

export function ExplanationTooltip({
  className,
  text = '',
  ...props
}: ExplanationTooltipProps): JSX.Element {
  return (
    <Tooltip className={cn(styles.container, className)} body={text} {...props}>
      <QuestionMark className={styles.questionMark} />
    </Tooltip>
  );
}
