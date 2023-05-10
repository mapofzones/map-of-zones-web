import cn from 'classnames';

import { PlusIcon } from 'assets/icons';
import { Button } from 'ui';

import styles from './AddToCompareButton.module.scss';

import { AddToCompareButtonProps } from '.';

export function AddToCompareButton({ className, ...props }: AddToCompareButtonProps): JSX.Element {
  return (
    <Button className={cn(className, styles.container)} IconBefore={PlusIcon} {...props}>
      Add to compare
    </Button>
  );
}
