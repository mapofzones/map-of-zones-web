import { Table } from 'components';
import { useDefaultSearchParam } from 'hooks/useDefaultSearchParam';

import styles from './AssetsTable.module.scss';
import { TableRow } from './TableRow/TableRow';
import { ColumnKeys, SORTING_COLUMN_KEYS, TABLE_HEADER_CONFIG } from './Types';

export function AssetsTable() {
  const [selectedColumnKey, setSelectedColumnKey] = useDefaultSearchParam<ColumnKeys>(
    'columnKey',
    ColumnKeys.MarketCap
  );

  const sortingColumnKey = SORTING_COLUMN_KEYS[selectedColumnKey];

  return (
    <div className={styles.container}>
      <div className={styles.header}>All Tokens</div>

      <Table
        className={styles.table}
        headerConfig={TABLE_HEADER_CONFIG}
        selectedColumnKey={selectedColumnKey}
        setSelectedColumnKey={setSelectedColumnKey}
      >
        {[
          {
            chart: [
              { chart: 864008 },
              { chart: 525530 },
              { chart: 542427 },
              { chart: 834886 },
              { chart: 580224 },
              { chart: 453794 },
              { chart: 1262586 },
              { chart: 1049334 },
              { chart: 1275890 },
              { chart: 578509 },
              { chart: 849844 },
              { chart: 1038182 },
            ],
            code: 'OSMO',
            logoUrl: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
            marketCap: 760644271905,
            marketCapDiffRating: 4,
            name: 'Osmosis',
            price: 798,
            price24hPercent: -5.2,
            price7dPercent: 3.2,
            supply: 645000000,
            volume24h: 78140124,
            volume24hPercent: -4.2,
          },
          {
            chart: [
              { chart: 864008 },
              { chart: 525530 },
              { chart: 542427 },
              { chart: 834886 },
              { chart: 580224 },
              { chart: 453794 },
              { chart: 1262586 },
              { chart: 1049334 },
              { chart: 1275890 },
              { chart: 578509 },
              { chart: 849844 },
              { chart: 1038182 },
            ],
            code: 'CSM',
            logoUrl: 'https://storage.mapofzones.com/frontend/labels/Cosmos40.svg',
            marketCap: 83011707888,
            marketCapDiffRating: 0,
            name: 'Cosmos',
            price: 523,
            price24hPercent: 1.8,
            price7dPercent: 7.7,
            supply: 853531123,
            volume24h: 8674257,
            volume24hPercent: 7.25,
          },
        ].map((asset, index) => (
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
