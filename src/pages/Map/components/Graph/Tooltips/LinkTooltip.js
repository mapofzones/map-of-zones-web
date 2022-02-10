import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FormattedNumber } from 'react-intl';

import { formatPercentage } from 'common/helper';

import styles from './index.module.css';

const cx = classNames.bind(styles);

// TODO: If a zone is focused on the map - this zone will be the first in the tooltip
// If no zone is focused on the map - the first zone in the tooltip should be the one with the biggest IN volume
function LinkTooltip({
  link,
  period,
  showOpenChannels,
  showActiveChannels,
  showActiveChannelsPercent,
}) {
  const history = useHistory();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const onDetailsPress = useCallback(() => {
    history.push(`/zone?source=${link.source.id}&targets=${link.target.id}`, {
      navigateFrom: location,
    });
  }, [history, link.source.id, link.target.id, location]);

  let mapTooltip =
    document.querySelector('.graph-tooltip') ||
    document.querySelector('.scene-tooltip');

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
          <div className={cx('header-row')}>
            <div className={cx('header')}>
              <div className={cx('zoneImagesContainer')}>
                {!!link.source.zoneLabelUrl && (
                  <img
                    className={cx('zoneImage')}
                    src={link.source.zoneLabelUrl}
                    alt={link.source.name}
                  />
                )}
                <div className={cx('channelGradient')} />
                {!!link.target.zoneLabelUrl && (
                  <img
                    className={cx('zoneImage')}
                    src={link.target.zoneLabelUrl}
                    alt={link.target.name}
                  />
                )}
              </div>
              <div className={cx('zoneNamesContainer')}>
                <div className={cx('item-text')}>{link.source.name}</div>
                <div className={cx('item-text')}>{link.target.name}</div>
              </div>
            </div>
          </div>
          <div>
            {showOpenChannels && (
              <div className={cx('row')}>
                <div className={cx('key-text', 'key-text-long')}>
                  Open Channels
                </div>
                <div className={cx('item-text')}>{link.openedChannels}</div>
              </div>
            )}
            {showActiveChannels && (
              <div className={cx('row')}>
                <div className={cx('key-text', 'key-text-long')}>Active</div>
                <div className={cx('item-text')}>{link.activeChannels}</div>
              </div>
            )}
            {showActiveChannelsPercent && (
              <div className={cx('row')}>
                <div className={cx('key-text', 'key-text-long')}>Active, %</div>
                <div className={cx('item-text', 'sent-title')}>
                  {Math.round(link.activeChannelsPercent)}%
                </div>
              </div>
            )}
            <div className={cx('row')}>
              <div className={cx('key-text', 'key-text-long')}>
                IBC Transfers per {period?.name}
              </div>
              <div className={cx('item-text')}>{link.ibcTxs}</div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text', 'key-text-long')}>Volume IN</div>
              <div className={cx('item-text', 'volumeContainer')}>
                <div className={cx('volumeIn')}>
                  {formatPercentage(link.volemeInPercentage)}
                </div>
                <FormattedNumber
                  value={link.volemeIn}
                  style="currency"
                  currency="USD"
                  maximumFractionDigits="0"
                />
              </div>
            </div>
            <div className={cx('row')}>
              <div className={cx('key-text', 'key-text-long')}>Volume OUT</div>
              <div className={cx('item-text', 'volumeContainer')}>
                <div className={cx('volumeOut')}>{formatPercentage(link.volemeOutPercentage)}</div>
                <FormattedNumber
                  value={link.volemeOut}
                  style="currency"
                  currency="USD"
                  maximumFractionDigits="0"
                />
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

LinkTooltip.defaultProps = {
  showOpenChannels: false,
  showActiveChannels: false,
  showActiveChannelsPercent: false,
};

export default LinkTooltip;
