import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { TableHeaderItem } from './TableHeaderItem/TableHeaderItem';
import { TABLE_HEADER_CONFIG } from './Types';

export function TableHeader({ selectedColumnKey, setSelectedColumnKey }: TableHeaderProps) {
  return (
    <thead className={styles.container}>
      <tr>
        {TABLE_HEADER_CONFIG.map((header) => (
          <TableHeaderItem
            key={header.title}
            isSelected={selectedColumnKey === header.columnKey}
            setSelectedColumnKey={setSelectedColumnKey}
            {...header}
          />
        ))}
      </tr>
    </thead>
  );
}
