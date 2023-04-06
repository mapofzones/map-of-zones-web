import cn from 'classnames';

import { ArrowRight } from 'assets/icons';
import { Button } from 'components';

import styles from './LearnMoreButton.module.scss';
import { LearnMoreButtonProps } from './LearnMoreButton.props';

export function LearnMoreButton({
  title,
  primary = false,
  ...props
}: LearnMoreButtonProps): JSX.Element {
  return (
    <Button className={cn(styles.wrapper, { [styles.primary]: primary })} {...props}>
      <div className={styles.content}>
        <span className={styles.btnText}>{title}</span>
        <div className={styles.circle}>
          <ArrowRight className={styles.arrowRight} />
        </div>
      </div>
    </Button>
  );
}
