import cn from 'classnames';

import { CompareIcon } from 'assets/icons';
import { Button, ButtonSize, ButtonVariant } from 'ui';

import styles from './CompareButton.module.scss';

import { CompareButtonProps } from '.';

export function CompareButton({ className, onClick }: CompareButtonProps): JSX.Element {
  const showNewLabel = process.env.REACT_APP_MARK_COMPARE_AS_NEW?.toUpperCase() === 'TRUE';

  return (
    <Button
      className={cn(className, styles.container)}
      size={ButtonSize.LARGE}
      variant={ButtonVariant.PRIMARY}
      IconBefore={CompareIcon}
      onClick={onClick}
    >
      Compare Zones
      {showNewLabel && <div className={styles.newLabel}>New</div>}
    </Button>
  );
}
