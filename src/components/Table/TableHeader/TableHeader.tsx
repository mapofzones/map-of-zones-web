import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.props';
import { TableHeaderItem } from './TableHeaderItem/TableHeaderItem';

export function TableHeader<T extends string>({
  config,
  selectedColumnKey,
  setSelectedColumnKey,
}: TableHeaderProps<T>) {
  return (
    <thead className={styles.container}>
      <tr>
        {config.map((header) => (
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
