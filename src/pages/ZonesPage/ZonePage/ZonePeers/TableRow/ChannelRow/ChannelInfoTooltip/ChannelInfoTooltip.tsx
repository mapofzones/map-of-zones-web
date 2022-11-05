import { useState } from 'react';

import cn from 'classnames';

import { InfoIcon, RevertedArrowsIcon } from 'assets/icons';
import { Divider, Tooltip } from 'components';
import { trackEvent } from 'hooks/analytics/useAnalytics';
import { useSelectedPeriod } from 'hooks/useSelectedPeriod';

import styles from './ChannelInfoTooltip.module.scss';
import { ChannelInfoTooltipProps } from './ChannelInfoTooltip.props';
import { TooltipValue } from './TooltipValue/TooltipValue';

export function ChannelInfoTooltip({
  className,
  channel,
  parentZone,
  zone,
}: ChannelInfoTooltipProps) {
  const [isEventTracked, setIsEventTracked] = useState(false);

  const [selectedPeriod] = useSelectedPeriod();

  const onMouseEnter = () => {
    if (!isEventTracked) {
      setIsEventTracked(true);
      trackEvent('viewed peers info', {
        zone: parentZone.zone,
        channel: channel.channelId,
        peer: zone.zoneCounterpartyKey,
        period: selectedPeriod,
      });
    }
  };

  const body = (
    <>
      <div className={styles.title}>
        {parentZone.name}
        <RevertedArrowsIcon className={styles.arrowIcon} />
        {zone.zoneCounterpartyName}
      </div>

      <Divider horizontal />

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
    </>
  );

  return (
    <Tooltip
      className={cn(styles.container, className)}
      body={body}
      isVertical={false}
      showTriangle={true}
      onMouseEnter={onMouseEnter}
    >
      <InfoIcon />
    </Tooltip>
  );
}
