import { useState } from 'react';

import cn from 'classnames';

import { NumberType, ValueWithPending, ZoneLogo, ZoneStatus } from 'components';
import { ArrowDown } from 'icons';

import { ChannelRow } from './ChannelRow/ChannelRow';
import { ShowMoreRow } from './ShowMoreRow/ShowMoreRow';
import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ parentZone, zone }: TableRowProps) {
  const [channelsConfig, setChannelsConfig] = useState({
    isChannelsVisible: false,
    isMoreChannelsVisible: false,
  });

  const channelsToShow = channelsConfig.isMoreChannelsVisible
    ? zone.channels
    : [...zone.channels].splice(0, 3);

  const toggleChannelsVisibility = () => {
    setChannelsConfig((prevState) => ({
      isChannelsVisible: !prevState.isChannelsVisible,
      isMoreChannelsVisible: false,
    }));
  };

  const showMoreChannels = () =>
    setChannelsConfig({ isChannelsVisible: true, isMoreChannelsVisible: true });

  return (
    <>
      <tr className={styles.container} onClick={toggleChannelsVisibility}>
        <td className={styles.columnContainer}>
          <div
            className={cn(styles.arrowContainer, {
              [styles.arrowUp]: channelsConfig.isChannelsVisible,
            })}
          >
            <ArrowDown />
          </div>

          <div className={styles.zonesInfoContainer}>
            <div
              className={cn(styles.zoneContainer, {
                [styles.animated]: channelsConfig.isChannelsVisible,
              })}
            >
              <div
                className={cn(styles.logoContainer, {
                  [styles.logoContainerSmall]: !channelsConfig.isChannelsVisible,
                })}
              >
                <ZoneLogo
                  logoUrl={parentZone?.logoUrl}
                  size={channelsConfig.isChannelsVisible ? '32px' : '16px'}
                  className={styles.logo}
                />
              </div>

              {channelsConfig.isChannelsVisible && (
                <div className={styles.zoneNameContainer}>
                  <span className={styles.value}>{parentZone?.name}</span>

                  <ZoneStatus className={styles.status} status={parentZone?.isZoneUpToDate} />
                </div>
              )}
            </div>

            <div className={styles.zoneContainer}>
              <div className={styles.logoContainer}>
                <ZoneLogo logoUrl={zone?.zoneCounterpartyLogoUrl} className={styles.logo} />
              </div>
              <div>
                <div className={styles.zoneNameContainer}>
                  <span className={styles.value}>{zone.zoneCounterpartyName}</span>

                  <ZoneStatus className={styles.status} status={zone.isZoneCounterpartyUpToDate} />
                </div>

                {!channelsConfig.isChannelsVisible && (
                  <span className={styles.channelsText}>
                    {zone.channels.length} Channel{zone.channels.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
        </td>

        <td className={styles.columnContainer}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumeOutPending}
            value={zone.ibcVolumeOut}
          />
        </td>

        <td className={cn(styles.columnContainer, styles.withBorder)}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumeOutPending}
            value={zone.ibcVolumeOut}
          />
        </td>

        <td className={styles.columnContainer}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Currency}
            pendingValue={zone.ibcVolumeInPending}
            value={zone.ibcVolumeIn}
          />
        </td>

        <td className={cn(styles.columnContainer, styles.withBorder)}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfers}
          />
        </td>

        <td className={styles.columnContainer}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfersPending}
          />
        </td>

        <td className={styles.columnContainer}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Number}
            value={zone.ibcTransfersFailed}
          />
        </td>

        <td className={cn(styles.columnContainer, styles.withBorder)}>
          <ValueWithPending
            alignRight={true}
            className={styles.value}
            numberType={NumberType.Percent}
            value={zone.successRate}
          />
        </td>
      </tr>

      {channelsConfig.isChannelsVisible &&
        channelsToShow.map((channel, index) => (
          <ChannelRow
            key={`${channel.channelId}_${channel.zoneCounterpartyChannelId}`}
            channel={channel}
            index={index}
            parentZone={parentZone}
            zone={zone}
          />
        ))}

      {channelsConfig.isChannelsVisible && (
        <ShowMoreRow
          count={zone.channels.length - channelsToShow.length}
          showMoreChannels={showMoreChannels}
        />
      )}
    </>
  );
}
