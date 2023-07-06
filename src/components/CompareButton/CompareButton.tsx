import cn from 'classnames';

import { CompareIcon } from 'assets/icons';
import { Button, ButtonSize, ButtonVariant } from 'ui';

import styles from './CompareButton.module.scss';

import { CompareButtonProps } from '.';

export function CompareButton({ className, onClick }: CompareButtonProps): JSX.Element {
  return (
    <Button
      className={cn(className, styles.container)}
      size={ButtonSize.LARGE}
      variant={ButtonVariant.PRIMARY}
      IconBefore={CompareIcon}
      onClick={onClick}
    >
      Compare Zones
    </Button>
  );
}
