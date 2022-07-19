import cn from 'classnames';

import { NumberType, ValueWithPending } from 'components';
import { InfoIcon } from 'icons';

import styles from './ChannelRow.module.scss';
import { ChannelRowProps } from './ChannelRow.props';

export function ChannelRow({ className, channel, index }: ChannelRowProps) {
  return (
    <tr className={cn(styles.container, className)}>
      <td className={styles.columnContainer}>
        <div className={styles.arrowContainer}>
          <div className={styles.position}>{index + 1}</div>
        </div>

        <div className={styles.channelsContainer}>
          <div className={styles.channel}>{channel.channelId}</div>
          <div className={styles.statusContainer} />
          <div className={styles.channel}>{channel.zoneCounterpartyChannelId}</div>
          <InfoIcon className={styles.infoIcon} />
        </div>
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
          pendingValue={channel.ibcVolumeOutPending}
          value={channel.ibcVolumeOut}
        />
      </td>

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeInPending}
          value={channel.ibcVolumeIn}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
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

      <td className={styles.columnContainer}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfersFailed}
        />
      </td>

      <td className={cn(styles.columnContainer, styles.withBorder)}>
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
