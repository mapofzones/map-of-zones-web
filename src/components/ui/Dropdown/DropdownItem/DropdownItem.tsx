import cn from 'classnames';

import { TickIcon } from 'assets/icons';

import styles from './DropdownItem.module.scss';
import { DropdownItemProps } from './DropdownItem.props';
import { DropdownTooltip } from '../DropdownTooltip';

export function DropdownItem({
  option,
  isActive,
  getTitle,
  onOptionClicked,
  className,
}: DropdownItemProps) {
  const item = (
    <li
      onClick={onOptionClicked?.(option)}
      className={cn(className, styles.listItem, {
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
    <DropdownTooltip className={styles.itemContainer} body={option.description}>
      {item}
    </DropdownTooltip>
  );
}
