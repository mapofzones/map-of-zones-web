import cn from 'classnames';

import { Tooltip } from 'components';
import { InfoIcon, RevertedArrowsIcon } from 'icons';

import styles from './ChannelInfoTooltip.module.scss';
import { ChannelInfoTooltipProps } from './ChannelInfoTooltip.props';
import { TooltipValue } from './TooltipValue/TooltipValue';

export function ChannelInfoTooltip({
  className,
  channel,
  parentZone,
  zone,
}: ChannelInfoTooltipProps) {
  return (
    <div className={cn(styles.container, className)}>
      <InfoIcon />

      <Tooltip className={styles.tooltip}>
        <div className={styles.title}>
          {parentZone.name}
          <RevertedArrowsIcon className={styles.arrowIcon} />
          {zone.zoneCounterpartyName}
        </div>

        <div className={styles.divider} />

        {!channel.isOpened && <div className={styles.connection}>Poor connection</div>}

        {channel.clientId && <TooltipValue title="Client ID" subtitle={channel.clientId} />}

        {channel.connectionId && (
          <TooltipValue title="Connection ID" subtitle={channel.connectionId} />
        )}

        <TooltipValue title="State" subtitle={channel.isOpened ? 'Opened' : 'Closed'} />

        {channel.channelId && <TooltipValue title="Channel ID" subtitle={channel.channelId} />}

        {channel.zoneCounterpartyChannelId && (
          <TooltipValue
            title="Counterparty Channel ID"
            subtitle={channel.zoneCounterpartyChannelId}
          />
        )}

        <div className={styles.triangle} />
      </Tooltip>
    </div>
  );
}
