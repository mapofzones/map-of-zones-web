import { useState } from 'react';

import cn from 'classnames';
import { motion } from 'framer-motion';

import { PendingValue, TableRowItem, ValueWithPending, ZoneLogo, ZoneStatus } from 'components';
import { trackEvent } from 'hooks/analytics/useAnalytics';
import { useTabletSmallMediaQuery } from 'hooks/useMediaQuery';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';
import { NumberType } from 'types/NumberType';
import { AnimatedArrowDown } from 'ui';

import { ChannelRow } from './ChannelRow/ChannelRow';
import { ShowMoreRow } from './ShowMoreRow/ShowMoreRow';
import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ isTableHorizontalScrollable, parentZone, zone }: TableRowProps) {
  const isTabletSmall = useTabletSmallMediaQuery();

  const [selectedPeriod] = useSelectedPeriod();

  const [channelsConfig, setChannelsConfig] = useState({
    isChannelsVisible: false,
    isMoreChannelsVisible: false,
  });

  const channelsToShow = channelsConfig.isMoreChannelsVisible
    ? zone.channels
    : [...zone.channels].splice(0, 3);

  const animationConfig = {
    animate: isTabletSmall
      ? false
      : channelsConfig.isChannelsVisible
      ? 'channelsHidden'
      : 'channelsVisible',
    initial: 'channelsVisible',
    transition: { duration: 0.5 },
  };

  const toggleChannelsVisibility = () => {
    setChannelsConfig((prevState) => {
      const newIsChannelsVisible = !prevState.isChannelsVisible;

      trackEvent(newIsChannelsVisible ? 'expanded peer' : 'folded peer', {
        zone: parentZone.zone,
        peer: zone.zoneCounterpartyKey,
        period: selectedPeriod,
      });

      return {
        isChannelsVisible: newIsChannelsVisible,
        isMoreChannelsVisible: false,
      };
    });
  };

  const showMoreChannels = () =>
    setChannelsConfig({ isChannelsVisible: true, isMoreChannelsVisible: true });

  return (
    <>
      <tr
        className={cn(styles.container, {
          [styles.active]: channelsConfig.isChannelsVisible,
        })}
        onClick={toggleChannelsVisibility}
      >
        <TableRowItem
          isSticky={isTableHorizontalScrollable}
          withBorder={isTableHorizontalScrollable}
        >
          <AnimatedArrowDown
            className={styles.arrowContainer}
            isReverted={channelsConfig.isChannelsVisible}
            initial={true}
          />

          <div className={styles.zonesInfoContainer}>
            <div className={styles.zoneContainer}>
              <motion.div
                className={styles.logoContainer}
                variants={{
                  channelsVisible: { left: -22, scale: 0.5 },
                  channelsHidden: { left: 0, scale: 1 },
                }}
                {...animationConfig}
              >
                <ZoneLogo logoUrl={parentZone?.logoUrl} className={styles.logo} />
              </motion.div>

              <motion.div
                className={styles.zoneNameContainer}
                variants={{ channelsVisible: { opacity: 0 }, channelsHidden: { opacity: 1 } }}
                {...animationConfig}
              >
                <span className={styles.value}>{parentZone?.name}</span>

                <ZoneStatus className={styles.status} status={parentZone?.isZoneUpToDate} />
              </motion.div>
            </div>

            <motion.div
              className={styles.zoneContainer}
              variants={{ channelsVisible: { left: 0 }, channelsHidden: { left: 233 } }}
              {...animationConfig}
            >
              <div className={styles.logoContainer}>
                <ZoneLogo logoUrl={zone?.zoneCounterpartyLogoUrl} className={styles.logo} />
              </div>

              <motion.div
                className={styles.zoneInfoContainer}
                variants={{ channelsVisible: { top: 0 }, channelsHidden: { top: 8 } }}
                {...animationConfig}
              >
                <div className={styles.zoneNameContainer}>
                  <span className={styles.value}>{zone.zoneCounterpartyName}</span>

                  <ZoneStatus className={styles.status} status={zone.isZoneCounterpartyUpToDate} />
                </div>

                <motion.div
                  className={styles.channelsText}
                  variants={{ channelsVisible: { opacity: 0.5 }, channelsHidden: { opacity: 0 } }}
                  {...animationConfig}
                >
                  {zone.channels.length} Channel{zone.channels.length !== 1 ? 's' : ''}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </TableRowItem>

        <TableRowItem withBorder={true}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumePending}
            value={zone.ibcVolume}
          />
        </TableRowItem>

        <TableRowItem>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumeInPending}
            value={zone.ibcVolumeIn}
          />
        </TableRowItem>

        <TableRowItem withBorder={true}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumeOutPending}
            value={zone.ibcVolumeOut}
          />
        </TableRowItem>

        <TableRowItem>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfers}
          />
        </TableRowItem>

        <TableRowItem>
          <PendingValue
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfersPending}
          />
        </TableRowItem>

        <TableRowItem withBorder={true}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfersFailed}
          />
        </TableRowItem>

        <td className={styles.columnContainer}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Percent}
            value={zone.ibcTransfersSuccessRate}
          />
        </td>
      </tr>

      {channelsConfig.isChannelsVisible && (
        <>
          {channelsToShow.map((channel, index) => (
            <ChannelRow
              key={`${channel.channelId}_${channel.zoneCounterpartyChannelId}`}
              channel={channel}
              index={index}
              isTableHorizontalScrollable={isTableHorizontalScrollable}
              parentZone={parentZone}
              zone={zone}
            />
          ))}
          <ShowMoreRow
            count={zone.channels.length - channelsToShow.length}
            isTableHorizontalScrollable={isTableHorizontalScrollable}
            showMoreChannels={showMoreChannels}
          />
        </>
      )}
    </>
  );
}
