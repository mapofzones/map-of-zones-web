import cn from 'classnames';

import { TickIcon } from 'assets/icons';
import { Tooltip } from 'components/ui/Tooltip/Tooltip';

import styles from './DropdownItem.module.scss';

import { DropdownItemProps } from '.';

export function DropdownItem({ option, isActive, getTitle, onOptionClicked }: DropdownItemProps) {
  const item = (
    <li
      onClick={onOptionClicked(option)}
      className={cn(styles.listItem, {
        [styles.active]: isActive,
      })}
    >
      <div className={styles.itemTitle}>
        {getTitle(option)}
        <TickIcon className={styles.tickIcon} />
      </div>
    </li>
  );

  if (!option.description) {
    return <span className={styles.itemContainer}>{item}</span>;
  }

  return (
    <Tooltip
      className={cn(styles.tooltip, styles.itemContainer)}
      body={option.description}
      showTriangle={true}
      isVertical={false}
      maxWidth={176}
    >
      {item}
    </Tooltip>
  );
}
