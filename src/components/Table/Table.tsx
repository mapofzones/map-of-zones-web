import cn from 'classnames';

import styles from './Table.module.scss';
import { TableHeader } from './TableHeader/TableHeader';

export function Table({
  children,
  className,
  headerConfig,
  selectedColumnKey,
  setSelectedColumnKey,
}: any) {
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
