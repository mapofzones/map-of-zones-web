import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.css';

const STATUS_ICON_COLOR_BY_ZONE = {
  null: '#D76969',
  true: '#5CA97B',
  false: '#EABA82',
};

const STATUS_TITLE_BY_ZONE = {
  null: 'Not connected',
  true: 'Connected',
  false: 'Synchronizing',
};

const cx = classNames.bind(styles);

export default function Status({ isZoneUpToDate }) {
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
      <div className={cx('zone-status')}>
        <div
          style={{ background: STATUS_ICON_COLOR_BY_ZONE[isZoneUpToDate] }}
          className={cx('zone-status-icon-background', {
            'zone-status-icon-faded': isFaded,
            'zone-status-icon-fading': !isFaded,
          })}
        />
        <div
          style={{ background: STATUS_ICON_COLOR_BY_ZONE[isZoneUpToDate] }}
          className={cx('zone-status-icon')}
        />
      </div>
      <div className={cx('zone-status-tooltip')}>
        {STATUS_TITLE_BY_ZONE[isZoneUpToDate]}
      </div>
    </div>
  );
}
