import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { parse, stringify } from 'querystringify';
import { FormattedNumber } from 'react-intl';

import { formatNumber, formatPercentage } from 'common/helper';
import { ReactComponent as PendingIcon } from 'assets/images/pending.svg';

import styles from './index.module.css';

const cx = classNames.bind(styles);

function NodeTooltip({ node, period }) {
  const history = useHistory();
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const onDetailsPress = useCallback(() => {
    const { testnet } = parse(location.search);

    const search = {
      period: period.hours,
      source: node.id,
      tableOrderBy: 'volume_in',
      tableOrderSort: 'desc',
    };

    if (testnet === 'true') {
      search.testnet = true;
    } else {
      search.testnet = false;
    }

    history.push(`/zone?${stringify(search)}`, {
      navigateFrom: location,
    });
  }, [history, location, node.id, period.hours]);

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
      <div
        className={cx('wrapper')}
        style={{
          borderTop: `4px solid ${node.color}`,
        }}
      >
        <div className={cx('content')}>
          <div className={cx('headerRow')}>
            <div className={cx('labelContainer')}>
              {!!node.zoneLabelUrl && (
                <img
                  className={cx('labelImage')}
                  src={node.zoneLabelUrl}
                  alt={node.name}
                />
              )}
              <div className={cx('zoneName')}>{node.name}</div>
            </div>
            <div className={cx('title', 'periodTitle')}>{period.name}</div>
          </div>
          <div className={cx('statContainer')}>
            <div className={cx('column')}>
              <div className={cx('stat')}>
                <div className={cx('title')}>Peers</div>
                <div className={cx('value')}>{formatNumber(node.peers)}</div>
              </div>
              <div className={cx('stat', 'secondRow')}>
                <div className={cx('title')}>IBC volume, $</div>
                <div className={cx('value')}>
                  <FormattedNumber
                    value={node.ibcVolume}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumePending}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
              <div className={cx('stat')}>
                <div className={cx('title')}>IBC volume out, $</div>
                <div className={cx('value')}>
                  <FormattedNumber
                    value={node.ibcVolumeSent}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('value', 'sent')}>
                  {formatPercentage(node.ibcVolumeSentPercentage)}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumeSentPending}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
            </div>
            <div className={cx('column')}>
              <div className={cx('stat')}>
                <div className={cx('title')}>IBC transfers</div>
                <div className={cx('value')}>
                  {formatNumber(node.ibcTransfers)}
                </div>
              </div>
              <div className={cx('stat', 'secondRow')}>
                <div className={cx('title')}>Success rate, %</div>
                <div className={cx('value')}>
                  {formatPercentage(node.successRate)}
                </div>
              </div>
              <div className={cx('stat')}>
                <div className={cx('title')}>IBC volume in, $</div>
                <div className={cx('value')}>
                  <FormattedNumber
                    value={node.ibcVolumeReceived}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('value', 'received')}>
                  {formatPercentage(node.ibcVolumeReceivedPercentage)}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumeReceivedPending}
                    style={`currency`}
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onDetailsPress}
          className={cx('detailsButton')}
        >
          Details
        </button>
      </div>
    </div>
  );
}

NodeTooltip.defaultProps = {};

export default NodeTooltip;
