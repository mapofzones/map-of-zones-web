import { useState } from 'react';

import cn from 'classnames';

import {
  ButtonGroup,
  Card,
  Divider,
  NumberFormat,
  NumberType,
  PeriodKeys,
  SkeletonTextWrapper,
  ValueWithPending,
  VolumeLineChart,
} from 'components';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';

import { useZoneOverviewActivity } from './useZoneOverviewActivity';
import styles from './ZoneOverviewActivity.module.scss';

const PERIODS: PeriodKeys[] = [PeriodKeys.DAY, PeriodKeys.WEEK, PeriodKeys.MONTH];

export function ZoneOverviewActivity({ className }: { className?: string }) {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { data, loading } = useZoneOverviewActivity(selectedPeriod);

  const onPeriodSelected = (item: { key?: PeriodKeys }) => {
    item?.key && setSelectedPeriod(item.key);
  };

  return (
    <Card className={cn(className, styles.container)}>
      <div className={styles.header}>
        <span>{`Activity (${selectedPeriod.toUpperCase()})`}</span>
        {PERIODS.length > 1 && (
          <ButtonGroup
            className={styles.periodSwitcher}
            size={ElementSize.SMALL}
            buttons={PERIODS.map((period: PeriodKeys) => ({
              key: period,
              title: period.toUpperCase(),
            }))}
            setSelectedButton={onPeriodSelected}
          />
        )}
      </div>
      <div className={styles.valuesContainer}>
        <div className={cn(styles.valueGroup, styles.volumeGroup)}>
          <ValueWithPending
            className={cn(styles.valueBlock, styles.ibcVolume)}
            title={'IBC Volume'}
            value={data?.ibcVolume}
            numberType={NumberType.Currency}
            tooltipText={tooltips['ibcVolume']()}
            size={ElementSize.LARGE}
            loading={loading}
            defaultSkeletonText={'$16 256 000'}
          />

          <div className={cn(styles.volumeInOutContainer, styles.valueBlock)}>
            <VolumeLineChart
              className={styles.volumeLineChart}
              volumeInPercent={data?.ibcVolumeInPercent}
              volumeOutPercent={data?.ibcVolumeOutPercent}
            />

            <div className={styles.volumeInOutValuesContainer}>
              <SkeletonTextWrapper
                className={styles.volumeInValue}
                loading={loading}
                defaultText={'$7 940 600'}
              >
                <NumberFormat value={data?.ibcVolumeIn} numberType={NumberType.Currency} />
              </SkeletonTextWrapper>

              <SkeletonTextWrapper
                className={cn(styles.volumeOutValue)}
                loading={loading}
                defaultText={'$7 940 600'}
              >
                <NumberFormat value={data?.ibcVolumeOut} numberType={NumberType.Currency} />
              </SkeletonTextWrapper>
            </div>
          </div>
        </div>

        <Divider />

        <div className={styles.valueGroup}>
          <ValueWithPending
            className={cn(styles.valueBlock, styles.transactions)}
            title={'Transactions'}
            value={data?.totalTxs}
            numberType={NumberType.Number}
            tooltipText={tooltips['totalTxs']()}
            size={ElementSize.LARGE}
            loading={loading}
            defaultSkeletonText={'149 650'}
          />
          <ValueWithPending
            className={styles.valueBlock}
            title={'IBC Transfers'}
            value={data?.ibcTransfers}
            numberType={NumberType.Number}
            tooltipText={tooltips['ibcTransfers']()}
            size={ElementSize.LARGE}
            loading={loading}
            defaultSkeletonText={'29 848'}
          />
        </div>

        <Divider />

        <div className={styles.valueGroup}>
          <ValueWithPending
            className={cn(styles.valueBlock, styles.activeAddresses)}
            title="Active Addresses"
            value={data?.dau}
            numberType={NumberType.Number}
            tooltipText={tooltips['dau'](selectedPeriod)}
            size={ElementSize.LARGE}
            loading={loading}
            defaultSkeletonText={'17 000'}
          />
          <ValueWithPending
            className={styles.valueBlock}
            title="Active IBC Addresses"
            value={data?.ibcDau}
            numberType={NumberType.Number}
            tooltipText={tooltips['ibcDau'](selectedPeriod)}
            size={ElementSize.LARGE}
            loading={loading}
            defaultSkeletonText={'5 000'}
          />
        </div>
      </div>
    </Card>
  );
}
