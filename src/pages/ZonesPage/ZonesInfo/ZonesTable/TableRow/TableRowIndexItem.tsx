import { TableRowItem } from 'components';
import { Checkbox } from 'components/Checkbox';

import styles from './TableRow.module.scss';
import { useTableMetadata } from '../ZonesTableMetadataProvider';

export function TableRowIndexItem({
  isTableHorizontalScrollable,
  index,
  zoneKey,
}: {
  isTableHorizontalScrollable: boolean | undefined;
  index: number;
  zoneKey: string;
}) {
  const { isComparisonMode, isCheckedFunc, onCheckedChange } = useTableMetadata();

  return (
    <TableRowItem isSticky={isTableHorizontalScrollable}>
      {!isComparisonMode && <span className={styles.position}>{index + 1}</span>}
      {isComparisonMode && (
        <Checkbox
          checked={isCheckedFunc?.(zoneKey) ?? false}
          onCheckedChange={(checked) => onCheckedChange?.(zoneKey, checked)}
          disabled={false}
        />
      )}
    </TableRowItem>
  );
}
