import { Table } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

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

  const { data } = useAssetsTable(sortingColumnKey);

  return (
    <div className={styles.container}>
      <div className={styles.header}>All Tokens</div>

      <Table
        className={styles.table}
        headerConfig={TABLE_HEADER_CONFIG}
        selectedColumnKey={selectedColumnKey}
        setSelectedColumnKey={setSelectedColumnKey}
      >
        {data.map((asset, index) => (
          <TableRow
            key={`asset_${asset.code}`}
            asset={asset}
            index={index}
            selectedColumnKey={selectedColumnKey}
          />
        ))}
      </Table>
    </div>
  );
}