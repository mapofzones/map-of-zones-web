import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FormattedNumber } from 'react-intl';

import { formatNumber } from 'common/helper';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

// TODO: If a zone is focused on the map - this zone will be the first in the tooltip
// If no zone is focused on the map - the first zone in the tooltip should be the one with the biggest IN volume
function LinkTooltip({ link, period }) {
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
      className={cx('container', { active: isActive })}
      style={{
        left: parseInt(mapTooltip.style.left) + 'px',
        top: parseInt(mapTooltip.style.top) + 'px',
      }}
    >
      <div className={cx('wrapper')}>
        <div className={cx('content')}>
          <div className={cx('headerRow')}>
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
                <div className={cx('zoneName')}>{link.source.name}</div>
                <div className={cx('zoneName')}>{link.target.name}</div>
              </div>
            </div>
          </div>
          <div className={cx('body')}>
            <div>
              <div className={cx('title', 'cell')}>
                IBC Transfers per {period?.name}
              </div>
              <div className={cx('title', 'cell')}>Total IBC volume</div>
            </div>
            <div>
              <div className={cx('cell')}>
                <div className={cx('value')}>{formatNumber(link.ibcTxs)}</div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  {formatNumber(link.ibcTxsPending)}
                </div>
              </div>
              <div className={cx('cell')}>
                <div className={cx('value')}>
                  <FormattedNumber
                    value={link.ibcVolume}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={link.ibcVolumePending}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
            </div>
            <div className={cx('row')}></div>
            <div className={cx('row')}></div>
          </div>
        </div>
        {/* <button
          type="button"
          onClick={onDetailsPress}
          className={cx('detailsButton')}
        >
          Details
        </button> */}
      </div>
    </div>
  );
}

LinkTooltip.defaultProps = {};

export default LinkTooltip;
