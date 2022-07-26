import cn from 'classnames';

import styles from './TableRowItem.module.scss';
import { TableRowItemProps } from './TableRowItem.props';

export function TableRowItem({ isSticky, children, withBorder = false }: TableRowItemProps) {
  return (
    <td
      className={cn({
        [styles.sticky]: isSticky,
        [styles.withBorder]: withBorder,
      })}
    >
      {children}
    </td>
  );
}
