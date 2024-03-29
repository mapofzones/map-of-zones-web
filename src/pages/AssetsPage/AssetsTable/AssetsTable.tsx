import { useMemo } from 'react';

import { Table, TableSkeleton } from 'components';
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

  const sortingColumnKey = SORTING_COLUMN_KEYS[selectedColumnKey];

  const { data, loading } = useAssetsTable();

  const sortedData = useSortedTableData(data, sortingColumnKey, 'desc');

  return (
    <div className={styles.container}>
      <div className={styles.header}>All Tokens</div>

      {!loading && (
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

      {loading && <TableSkeleton />}
    </div>
  );
}
