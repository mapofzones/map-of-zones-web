import cn from 'classnames';

import { PendingValue, PeriodKeys, TotalCard, TotalInfo, ValueWithPending } from 'components';
import { useLaptopMediumMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { LineChart, NumberFormat, NumberType } from 'ui';
import { getDauTitleByPeriod } from 'utils/helper';

import { useZonesIntercahinDau, ZonesTotalInterchainDau } from './useZonesInterchainDau';
import { useZonesTotalInfo } from './useZonesTotalInfo';
import { ZonesConnection } from './ZonesConnection/ZonesConnection';
import styles from './ZonesTotalInfo.module.scss';

function getDauValueByPeriod(data: ZonesTotalInterchainDau | undefined, period: PeriodKeys) {
  if (!data) {
    return undefined;
  }
  if (period === PeriodKeys.DAY) {
    return data.totalInterchainUniqueActiveAddressesDay;
  }
  if (period === PeriodKeys.WEEK) {
    return data.totalInterchainUniqueActiveAddressesWeek;
  }
  if (period === PeriodKeys.MONTH) {
    return data.totalInterchainUniqueActiveAddressesMonth;
  }
  return undefined;
}

export function ZonesTotalInfo(): JSX.Element {
  const [selectedPeriod] = useSelectedPeriod(undefined);

  const isLaptopMedium = useLaptopMediumMediaQuery();

  const { data: zonesTotalInfo, loading } = useZonesTotalInfo(selectedPeriod);

  const { data: zonesDau, loading: dauLoading } = useZonesIntercahinDau();

  return (
    <TotalInfo className={styles.zonesTotalInfo}>
      <TotalCard className={cn(styles.card, styles.withChart)} loading={loading}>
        <div>
          <span className={styles.title}>Total IBC Volume ({selectedPeriod})</span>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zonesTotalInfo?.ibcVolumePending}
            value={zonesTotalInfo?.ibcVolume}
          />
        </div>

        {zonesTotalInfo?.ibcTotalVolumeChart && (
          <LineChart
            className={styles.chart}
            data={zonesTotalInfo?.ibcTotalVolumeChart}
            dataKey="volume"
          />
        )}
      </TotalCard>

      <TotalCard className={styles.card} loading={loading}>
        <span className={styles.title}>Total IBC Transfers ({selectedPeriod})</span>
        <div className={styles.additionalDataContainer}>
          <ValueWithPending
            className={styles.value}
            numberType={NumberType.Number}
            pendingValue={zonesTotalInfo?.ibcTransfersPending}
            value={zonesTotalInfo?.ibcTransfers}
          />

          <span className={styles.pendingValue}>
            Failed:&nbsp;
            <NumberFormat
              value={zonesTotalInfo?.ibcTransfersFailed}
              numberType={NumberType.Number}
            />
          </span>
        </div>
      </TotalCard>

      {/* {!isLaptopMedium && (
        <TotalCard className={cn(styles.card, styles.doubleItem)} loading={loading}>
          <div>
            <span className={styles.title}>All Channels</span>
            <NumberFormat
              className={cn(styles.value, styles.doublevalue)}
              value={zonesTotalInfo?.allChannels}
              numberType={NumberType.Number}
            />
          </div>
          <Divider />
          <div>
            <span className={styles.title}>Active</span>
            <NumberFormat
              className={cn(styles.value, styles.doublevalue)}
              value={zonesTotalInfo?.activeChannels}
              numberType={NumberType.Number}
            />
          </div>
        </TotalCard>
      )} */}

      {!isLaptopMedium && (
        <TotalCard className={cn(styles.card)} loading={dauLoading}>
          <div>
            <span className={styles.title}>Interchain {getDauTitleByPeriod(selectedPeriod)}</span>
            <NumberFormat
              className={cn(styles.value, styles.mainValue)}
              numberType={NumberType.Number}
              value={getDauValueByPeriod(zonesDau, selectedPeriod)}
            />
          </div>
        </TotalCard>
      )}

      <TotalCard className={cn(styles.card, styles.topItem)} loading={loading}>
        {zonesTotalInfo?.ibcTransfersTopPair && (
          <>
            <div className={styles.zonesPairContainer}>
              <span className={styles.title}>Most Active Pair ({selectedPeriod})</span>
              <ZonesConnection
                circlesTypes={['source', 'target']}
                source={zonesTotalInfo.ibcTransfersTopPair?.source?.name}
                target={zonesTotalInfo.ibcTransfersTopPair?.target?.name}
              />
            </div>
            <div className={styles.cardNumbers}>
              <span className={styles.total}>
                <NumberFormat
                  value={zonesTotalInfo.ibcTransfersTopPair?.ibcTransfers}
                  numberType={NumberType.Number}
                />
                &nbsp;Transfers
              </span>
              <PendingValue
                className={styles.pendingValue}
                numberType={NumberType.Number}
                value={zonesTotalInfo.ibcTransfersTopPair?.ibcTransfersPending}
              />
            </div>
          </>
        )}
      </TotalCard>

      <TotalCard className={cn(styles.card, styles.topItem)} loading={loading}>
        {zonesTotalInfo?.ibcVolumeTopPair && (
          <>
            <div className={styles.zonesPairContainer}>
              <span className={styles.title}>Biggest Volume Pair ({selectedPeriod})</span>
              <ZonesConnection
                circlesTypes={['source', 'volume']}
                source={zonesTotalInfo.ibcVolumeTopPair?.source?.name}
                target={zonesTotalInfo.ibcVolumeTopPair?.target?.name}
              />
            </div>
            <div className={styles.cardNumbers}>
              <NumberFormat
                className={styles.total}
                value={zonesTotalInfo.ibcVolumeTopPair?.ibcVolume}
                numberType={NumberType.Currency}
              />
              <PendingValue
                className={styles.pendingValue}
                numberType={NumberType.Currency}
                value={zonesTotalInfo.ibcVolumeTopPair?.ibcVolumePending}
              />
            </div>
          </>
        )}
      </TotalCard>
    </TotalInfo>
  );
}
