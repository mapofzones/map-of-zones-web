import cn from 'classnames';

import {
  LineChart,
  NumberType,
  RatingDiffTriangle,
  ValueWithPending,
  ZoneLogo,
  TableRowItem,
} from 'components';
import { useMediaQuery } from 'hooks/useMediaQuery';

import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

// const ratingDiffKeysMap: Record<ColumnKeys, keyof AssetsTableRow> = {
//   marketCap: 'marketCapDiffRating',
//   price: 'priceDiffRating',
//   price24hPercent: 'price24hPercentDiffRating',
//   price7dPercent: 'price7dPercentDiffRating',
//   volume24h: 'volume24hDiffRating',
//   volume24hPercent: 'volume24hPercentDiffRating',
//   supply: 'supplyDiffRating',
// };

export function TableRow({
  asset,
  index,
  isTableHorizontalScrollable,
}: // selectedColumnKey,
TableRowProps) {
  const isTabletSmall = useMediaQuery('(max-width: 630px)');

  return (
    <tr className={styles.container}>
      <TableRowItem isSticky={true}>
        <span className={styles.position}>{index + 1}</span>
      </TableRowItem>

      <TableRowItem isSticky={true} withBorder={isTableHorizontalScrollable}>
        <div className={styles.assetInfoContainer}>
          <ZoneLogo
            size={isTabletSmall ? '28px' : '32px'}
            logoUrl={asset.logoUrl}
            className={styles.logo}
          />
          <div className={styles.nameAndStatusContainer}>
            <div className={styles.nameContainer}>
              <span className={styles.name}>{asset.blockchain.name}</span>
              {/* <RatingDiffTriangle className={styles.ratingDiff} ratingDiff={ratingDiff} /> */}
            </div>
            <span className={styles.code}>{asset.symbol}</span>
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
          ratingDiff={asset.price24hDiffPercent}
        />
      </TableRowItem>

      <TableRowItem>
        <RatingDiffTriangle
          allowEmpty={true}
          className={styles.value}
          numberType={NumberType.Percent}
          ratingDiff={asset.price7dDiffPercent}
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
          ratingDiff={asset.volume24hDiffPercent}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={asset.onChainSupply}
        />
      </TableRowItem>

      <TableRowItem>
        <div className={styles.chartContainer}>
          <span className={cn(styles.code, styles.value)}>{asset.symbol}</span>
          {asset.priceChart && <LineChart data={asset.priceChart} dataKey="price" />}
        </div>
      </TableRowItem>
    </tr>
  );
}
