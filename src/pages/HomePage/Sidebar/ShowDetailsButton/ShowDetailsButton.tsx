import cn from 'classnames';

import { ArrowInCircle } from 'assets/icons';
import { Button } from 'ui';

import styles from './ShowDetailsButton.module.scss';
import ShowDetailsButtonProps from './ShowDetailsButton.props';

export function ShowDetailsButton({ title, primary = false }: ShowDetailsButtonProps): JSX.Element {
  return (
    <Button className={cn(styles.wrapper, { [styles.primary]: primary })}>
      <div className={styles.content}>
        <span className={styles.btnText}>{title}</span>
        <ArrowInCircle className={styles.arrowIcon} />
      </div>
    </Button>
  );
}
