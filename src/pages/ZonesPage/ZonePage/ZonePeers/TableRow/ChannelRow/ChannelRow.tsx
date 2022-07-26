import cn from 'classnames';

import { NumberType, ValueWithPending } from 'components';
import { ChannelClosedIcon } from 'icons';

import { ChannelInfoTooltip } from './ChannelInfoTooltip/ChannelInfoTooltip';
import styles from './ChannelRow.module.scss';
import { ChannelRowProps } from './ChannelRow.props';

export function ChannelRow({ className, channel, index, parentZone, zone }: ChannelRowProps) {
  return (
    <tr className={cn(styles.container, className)}>
      <td className={cn(styles.columnContainer, styles.sticky)}>
        <div className={styles.arrowContainer}>
          <div className={styles.position}>{index + 1}</div>
        </div>

        <div className={styles.channelsContainer}>
          <div className={styles.channel}>{channel.channelId}</div>
          {channel.isOpened ? (
            <div className={styles.statusContainer} />
          ) : (
            <div className={cn(styles.statusContainer, styles.statusClosedContainer)}>
              <ChannelClosedIcon />
            </div>
          )}
          <div className={styles.channel}>{channel.zoneCounterpartyChannelId}</div>
          <ChannelInfoTooltip
            className={styles.infoIcon}
            channel={channel}
            parentZone={parentZone}
            zone={zone}
          />
        </div>
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeOutPending}
          value={channel.ibcVolumeOut}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeOutPending}
          value={channel.ibcVolumeOut}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeInPending}
          value={channel.ibcVolumeIn}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfers}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfersPending}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfersFailed}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Percent}
          value={channel.successRate}
        />
      </td>
    </tr>
  );
}
