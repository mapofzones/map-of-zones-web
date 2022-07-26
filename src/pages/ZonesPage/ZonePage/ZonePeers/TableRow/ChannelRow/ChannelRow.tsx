import cn from 'classnames';

import { NumberType, TableRowItem, ValueWithPending } from 'components';
import { ChannelClosedIcon } from 'icons';

import { ChannelInfoTooltip } from './ChannelInfoTooltip/ChannelInfoTooltip';
import styles from './ChannelRow.module.scss';
import { ChannelRowProps } from './ChannelRow.props';

export function ChannelRow({ className, channel, index, parentZone, zone }: ChannelRowProps) {
  return (
    <tr className={cn(styles.container, className)}>
      <TableRowItem isSticky={true}>
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
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeOutPending}
          value={channel.ibcVolumeOut}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeOutPending}
          value={channel.ibcVolumeOut}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Currency}
          pendingValue={channel.ibcVolumeInPending}
          value={channel.ibcVolumeIn}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfers}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfersPending}
        />
      </TableRowItem>

      <TableRowItem withBorder={true}>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Number}
          value={channel.ibcTransfersFailed}
        />
      </TableRowItem>

      <TableRowItem>
        <ValueWithPending
          alignRight={true}
          className={styles.value}
          numberType={NumberType.Percent}
          value={channel.successRate}
        />
      </TableRowItem>
    </tr>
  );
}