import cn from 'classnames';

import { QuestionMark } from 'assets/icons';

import { Tooltip } from '../Tooltip/Tooltip';
import styles from './ExplanationTooltip.module.scss';
import { ExplanationTooltipProps } from './ExplanationTooltip.props';

export function ExplanationTooltip({
  className,
  text = '',
  ...props
}: ExplanationTooltipProps): JSX.Element {
  return (
    <Tooltip
      className={cn(styles.container, className)}
      hoverElement={<QuestionMark className={styles.questionMark} />}
      {...props}
    >
      {text}
    </Tooltip>
  );
}
