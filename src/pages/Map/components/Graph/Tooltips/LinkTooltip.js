// import React, { useCallback, useEffect, useMemo, useState } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ReactComponent as CurvedLine } from 'assets/images/curved-line.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function LinkTooltip({ link }) {
  // const history = useHistory();
  // const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  // const onDetailsPress = useCallback(() => {
  //   history.push(`/zone?source=${link.source.id}&targets=${link.target.id}`, {
  //     navigateFrom: location.pathname + location.search,
  //   });
  // }, [history, link.source.id, link.target.id, location]);

  let mapTooltip = document.querySelector('.graph-tooltip');

  const totalOpenedChannels = useMemo(
    () => link?.source?.openChannels + link?.target?.openChannels || 0,
    [link],
  );

  const totalActiveChannels = useMemo(
    () => link?.source?.activeChannels + link?.target?.activeChannels || 0,
    [link],
  );

  const totalActivePercent = useMemo(
    () =>
      Math.round(
        (link?.source?.activeChannelsPercent +
          link?.target?.activeChannelsPercent || 0) / 2,
      ),
    [link],
  );

  if (!mapTooltip) {
    return null;
  }

  return (
    <div
      className={cx('custom-tooltip', { active: isActive })}
      style={{
        left: parseInt(mapTooltip.style.left) + 'px',
        top: parseInt(mapTooltip.style.top) + 'px',
      }}
    >
      <div className={cx('link-tooltip')}>
        <div className={cx('link-tooltip-content')}>
          <div className={cx('header-row', 'with-line')}>
            <CurvedLine className={cx('curved-line')} />
            <div className={cx('col')}>
              <div className={cx('item-text', 'header')}>
                {link.source.name}
              </div>
              <div className={cx('item-text', 'header')}>
                {link.target.name}
              </div>
            </div>
          </div>

          <div className={cx('row')}>
            <div className={cx('col')} style={{ width: '100%' }}>
              <div
                className={cx('row')}
                style={{ marginTop: '10px', marginBottom: 0 }}
              >
                <div className={cx('key-text', 'key-text-long')}>
                  Open Channels
                </div>
                <div className={cx('item-text')}>{totalOpenedChannels}</div>
              </div>
              <div
                className={cx('row')}
                style={{ marginTop: '6px', marginBottom: 0 }}
              >
                <div className={cx('key-text', 'key-text-long')}>Active</div>
                <div className={cx('item-text')}>{totalActiveChannels}</div>
              </div>
              <div
                className={cx('row')}
                style={{ marginTop: '6px', marginBottom: '10px' }}
              >
                <div className={cx('key-text', 'key-text-long')}>Active, %</div>
                <div className={cx('item-text', 'sent-title')}>
                  {totalActivePercent}%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button
          type="button"
          onClick={onDetailsPress}
          className={cx('details-button')}
        >
          Details
        </button> */}
      </div>
    </div>
  );
}

export default LinkTooltip;
