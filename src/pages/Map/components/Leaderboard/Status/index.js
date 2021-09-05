import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { ReactComponent as ZoneStatusConnectedIcon } from 'assets/images/zone-status-connected.svg';
import { ReactComponent as ZoneStatusProgressIcon } from 'assets/images/zone-status-in-progress.svg';
import { ReactComponent as ZoneStatusNotConnectedIcon } from 'assets/images/zone-status-not-connected.svg';

import styles from './index.module.css';

const STATUS_ICON_BY_ZONE = {
  null: ZoneStatusNotConnectedIcon,
  true: ZoneStatusConnectedIcon,
  false: ZoneStatusProgressIcon,
};

const STATUS_TITLE_BY_ZONE = {
  null: 'Not connected',
  true: 'Connected',
  false: 'Synchronizing',
};

const cx = classNames.bind(styles);

export default function Status({ isZoneUpToDate }) {
  const StatusIcon = STATUS_ICON_BY_ZONE[isZoneUpToDate];

  const [isFaded, setIsFaded] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isZoneUpToDate === false) {
      interval = setInterval(() => {
        setIsFaded(prevState => !prevState);
      }, 500);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isZoneUpToDate, setIsFaded]);

  return (
    <div className={cx('zone-status-container')}>
      {!!StatusIcon && (
        <StatusIcon
          className={cx('zone-status-icon', {
            'zone-status-icon-faded': isFaded,
            'zone-status-icon-fading': !isFaded,
          })}
        />
      )}
      <div className={cx('zone-status-tooltip')}>
        {STATUS_TITLE_BY_ZONE[isZoneUpToDate]}
      </div>
    </div>
  );
}
