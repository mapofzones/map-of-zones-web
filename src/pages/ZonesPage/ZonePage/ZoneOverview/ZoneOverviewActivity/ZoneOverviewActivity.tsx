import { useState } from 'react';

import cn from 'classnames';
import { useParams } from 'react-router-dom';

import { PeriodKeys, ValueWithPending, VolumeLineChart } from 'components';
import { OverviewCard } from 'components/OverviewCard/OverviewCard';
import { ElementSize } from 'types/ElementSize';
import { tooltips } from 'types/Tooltips';
import { NumberType, SkeletonTextWrapper, NumberFormat, Divider } from 'ui';

import { useZoneOverviewActivity } from './useZoneOverviewActivity';
import styles from './ZoneOverviewActivity.module.scss';
import { ZoneOverviewActivityHeader } from './ZoneOverviewActivityHeader/ZoneOverviewActivityHeader';

export function ZoneOverviewActivity({ className }: { className?: string }) {
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodKeys>(PeriodKeys.DAY);

  const { zone = '' } = useParams();
  const { data, loading } = useZoneOverviewActivity(selectedPeriod, zone);

  const onPeriodSelected = (key: PeriodKeys) => {
    setSelectedPeriod(key);
  };

  return (
    <OverviewCard className={cn(className)}>
      <ZoneOverviewActivityHeader
        selectedPeriod={selectedPeriod}
        onPeriodSelected={onPeriodSelected}
      />

      <OverviewCard.Body>
        <OverviewCard.Body.Group className={cn(styles.bodyGroup, styles.volumeGroup)}>
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
        </OverviewCard.Body.Group>

        <Divider />

        <OverviewCard.Body.Group className={styles.bodyGroup}>
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
        </OverviewCard.Body.Group>

        <Divider />

        <OverviewCard.Body.Group className={styles.bodyGroup}>
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
        </OverviewCard.Body.Group>
      </OverviewCard.Body>
    </OverviewCard>
  );
}
