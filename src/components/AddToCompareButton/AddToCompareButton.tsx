import cn from 'classnames';

import { PlusIcon } from 'assets/icons';

import styles from './AddToCompareButton.module.scss';

import { AddToCompareButtonProps } from '.';

export function AddToCompareButton({ className, ...props }: AddToCompareButtonProps): JSX.Element {
  return (
    <div className={cn(className, styles.container)} {...props}>
      <PlusIcon className={styles.icon} />
      Add to Compare
    </div>
  );
}
