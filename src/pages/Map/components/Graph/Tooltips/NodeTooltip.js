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
      tableOrderBy: 'success',
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
      className={cx('custom-tooltip', { active: isActive })}
      style={{
        left: parseInt(mapTooltip.style.left) + 'px',
        top: parseInt(mapTooltip.style.top) + 'px',
      }}
    >
      <div
        className={cx('node-custom-tooltip')}
        style={{
          borderTop: `4px solid ${node.color}`,
        }}
      >
        <div className={cx('node-custom-tooltip-content')}>
          <div className={cx('header-row', 'with-line')}>
            <div className={cx('item-text-and-image')}>
              {!!node.zoneLabelUrl && (
                <img
                  className={cx('item-image')}
                  src={node.zoneLabelUrl}
                  alt={node.name}
                />
              )}
              <div className={cx('item-text')}>{node.name}</div>
            </div>
            <div className={cx('key-text', 'period-title')}>{period.name}</div>
          </div>
          <div className={cx('statContainer')}>
            <div className={cx('column')}>
              <div className={cx('stat')}>
                <div className={cx('key-text')}>Peers</div>
                <div className={cx('item-text')}>
                  {formatNumber(node.peers)}
                </div>
              </div>
              <div className={cx('stat', 'secondRow')}>
                <div className={cx('key-text')}>IBC volume</div>
                <div className={cx('item-text')}>
                  <FormattedNumber
                    value={node.ibcVolume}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumePending}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
              <div className={cx('stat')}>
                <div className={cx('key-text')}>IBC out, $</div>
                <div className={cx('item-text')}>
                  <FormattedNumber
                    value={node.ibcVolumeSent}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('item-text', 'sent-title')}>
                  {formatPercentage(node.ibcVolumeSentPercentage)}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumeSentPending}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
              </div>
            </div>
            <div className={cx('column')}>
              <div className={cx('stat')}>
                <div className={cx('key-text')}>IBC transfers</div>
                <div className={cx('item-text')}>
                  {formatNumber(node.ibcTransfers)}
                </div>
              </div>
              <div className={cx('stat', 'secondRow')}>
                <div className={cx('key-text')}>Success rate</div>
                <div className={cx('item-text')}>
                  {formatPercentage(node.successRate)}
                </div>
              </div>
              <div className={cx('stat')}>
                <div className={cx('key-text')}>IBC in, $</div>
                <div className={cx('item-text')}>
                  <FormattedNumber
                    value={node.ibcVolumeReceived}
                    style="currency"
                    currency="USD"
                    maximumFractionDigits="0"
                  />
                </div>
                <div className={cx('item-text', 'received-title')}>
                  {formatPercentage(node.ibcVolumeReceivedPercentage)}
                </div>
                <div className={cx('pendingContainer')}>
                  <PendingIcon className={cx('pendingIcon')} />
                  <FormattedNumber
                    value={node.ibcVolumeReceivedPending}
                    style="currency"
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
          className={cx('details-button')}
        >
          Details
        </button>
      </div>
    </div>
  );
}

NodeTooltip.defaultProps = {};

export default NodeTooltip;
