import cn from 'classnames';

import styles from './Table.module.scss';
import { TableProps } from './Table.props';
import { TableHeader } from './TableHeader/TableHeader';

export function Table<T extends string>({
  children,
  className,
  headerConfig,
  selectedColumnKey,
  setSelectedColumnKey,
}: TableProps<T>) {
  return (
    <table className={cn(styles.tableContainer, className)}>
      <TableHeader
        className={styles.tableHeader}
        config={headerConfig}
        selectedColumnKey={selectedColumnKey}
        setSelectedColumnKey={setSelectedColumnKey}
      />

      <tbody>{children}</tbody>
    </table>
  );
}
