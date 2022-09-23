import { useMemo } from 'react';

import cn from 'classnames';

import { SkeletonRectangle, Table, TableSkeleton } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';
import { useSortedTableData } from 'hooks/useSortedTableData';

import styles from './AssetsTable.module.scss';
import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, SORTING_COLUMN_KEYS, TABLE_HEADER_CONFIG } from './Types';
import { useAssetsTable } from './useAssetsTable';

export function AssetsTable() {
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.MarketCap
  );

  const sortingColumnKey = useMemo(
    () => SORTING_COLUMN_KEYS[selectedColumnKey],
    [selectedColumnKey]
  );

  const { data } = useAssetsTable();

  const sortedData = useSortedTableData(data, sortingColumnKey, 'desc');

  return (
    <div className={styles.container}>
      {!!sortedData.length && <div className={styles.header}>All Tokens</div>}
      {!sortedData.length && <SkeletonRectangle className={cn(styles.header, styles.skeleton)} />}

      {!!sortedData.length && (
        <Table
          className={styles.table}
          headerConfig={TABLE_HEADER_CONFIG}
          selectedColumnKey={selectedColumnKey}
          setSelectedColumnKey={setSelectedColumnKey}
        >
          {sortedData.map((asset, index) => (
            <TableRow
              key={`asset_${asset.symbol}_${index}`}
              asset={asset}
              index={index}
              selectedColumnKey={selectedColumnKey}
            />
          ))}
        </Table>
      )}
      {!sortedData.length && <TableSkeleton />}
    </div>
  );
}
