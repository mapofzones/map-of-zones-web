import { useState } from 'react';

import cn from 'classnames';

import { NumberType, ValueWithPending, ZoneLogo, ZoneStatus } from 'components';
import { ArrowDown } from 'icons';

import { ChannelRow } from './ChannelRow/ChannelRow';
import styles from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';

export function TableRow({ parentZone, zone }: TableRowProps) {
  const [isChannelsVisible, setChannelsVisible] = useState(false);

  const toggleChannels = () => setChannelsVisible((prevState) => !prevState);

  return (
    <>
      <tr className={styles.container} onClick={toggleChannels}>
        <td className={styles.columnContainer}>
          <div className={styles.arrowContainer}>
            <ArrowDown />
          </div>

          <div className={styles.zoneBaseInfoContainer}>
            <div className={cn(styles.logoContainer, styles.logoContainerSmall)}>
              <ZoneLogo logoUrl={parentZone?.logoUrl} size="16px" className={styles.logo} />
            </div>
            <div className={styles.logoContainer}>
              <ZoneLogo logoUrl={zone?.zoneCounterpartyLogoUrl} className={styles.logo} />
            </div>
            <div>
              <div className={styles.zoneCounterpartyNameContainer}>
                <span className={styles.value}>{zone.zoneCounterpartyName}</span>

                <ZoneStatus className={styles.status} status={zone.isZoneCounterpartyUpToDate} />
              </div>

              <span className={styles.channelsText}>
                {zone.channels.length} Channel{zone.channels.length !== 1 ? 's' : ''}
              </span>
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

      {isChannelsVisible &&
        zone.channels.map((channel, index) => (
          <ChannelRow
            key={`channel_${channel.zoneCounterpartyChannelId}`}
            channel={channel}
            index={index}
          />
        ))}
    </>
  );
}
