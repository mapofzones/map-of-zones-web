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
      <div className={styles.itemTitle}>{getTitle(option)}</div>
      <TickIcon className={styles.tickIcon} />
    </li>
  );

  return (
    <>
      {!option.description && item}
      {option.description && (
        <Tooltip className={styles.tooltip} hoverElement={item} width={220}>
          {option.description}
        </Tooltip>
      )}
    </>
  );
}
