import cn from 'classnames';

import {
  LineChart,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
  TableRowItem,
} from 'components';

import { ColumnKeys } from '../Types';
import styles from './TableRow.module.scss';
import { AssetData, TableRowProps } from './TableRow.props';

const ratingDiffKeysMap: Record<ColumnKeys, keyof AssetData> = {
  marketCap: 'marketCapDiffRating',
};

export function TableRow({ asset, index, selectedColumnKey }: TableRowProps) {
  const ratingDiff = asset[ratingDiffKeysMap[selectedColumnKey]] as number;

  return (
    <tr className={styles.container}>
      <TableRowItem isSticky={true}>
        <span className={styles.position}>{index + 1}</span>
      </TableRowItem>

      <TableRowItem isSticky={true}>
        <div className={styles.assetInfoContainer}>
          <ZoneLogo logoUrl={asset.logoUrl} className={styles.logo} />
          <div>
            <div className={styles.nameContainer}>
              <span className={styles.name}>{asset.name}</span>
              <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={ratingDiff} />
            </div>
            <span className={styles.code}>{asset.code}</span>
          </div>
        </div>
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          value={asset.price}
        />
      </TableRowItem>

      <TableRowItem>
        <RatingDiffTriangle
          allowEmpty={true}
          className={styles.value}
          numberType={NumberType.Percent}
          ratingDiff={asset.price24hPercent}
        />
      </TableRowItem>

      <TableRowItem>
        <RatingDiffTriangle
          allowEmpty={true}
          className={styles.value}
          numberType={NumberType.Percent}
          ratingDiff={asset.price7dPercent}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          value={asset.marketCap}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          value={asset.volume24h}
        />
      </TableRowItem>

      <TableRowItem>
        <RatingDiffTriangle
          allowEmpty={true}
          className={styles.value}
          numberType={NumberType.Percent}
          ratingDiff={asset.volume24hPercent}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          prefix=""
          value={asset.supply}
        />
      </TableRowItem>

      <TableRowItem>
        <div className={styles.chartContainer}>
          <span className={cn(styles.code, styles.value)}>{asset.code}</span>
          {asset.chart && <LineChart data={asset.chart} dataKey="chart" />}
        </div>
      </TableRowItem>
    </tr>
  );
}
